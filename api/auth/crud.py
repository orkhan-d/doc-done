from api.auth.exceptions import EmailExists, WrongCredentials
from api.auth.models import User, Token
from api.auth.schemas import LoginData, RegisterData
from api.db import Session

import os

import jwt
import bcrypt


def check_user_token(uid: int, token: str):
    with Session() as sess:
        user = sess.query(Token).filter(Token.user_id == uid).first()
        return user is None or user.refresh_token == token


def set_user_refresh_token(uid: int, token: str):
    with Session.begin() as sess:
        user = sess.query(Token).filter(Token.user_id == uid).first()
        if user:
            user.refresh_token = token
        else:
            sess.add(Token(user_id=uid, refresh_token=token))


def get_user(email: str):
    with Session() as sess:
        user = sess.query(User).filter(User.email == email).first()
        return user


def add_user(data: RegisterData):
    if get_user(data.email):
        raise EmailExists()
    with Session.begin() as sess:
        data.password = bcrypt.hashpw(data.password, bcrypt.gensalt())
        sess.add(User(**dict(data)))
        sess.commit()

        return True


def login_user(data: LoginData):
    user = get_user(data.email)
    if user is None or not bcrypt.checkpw(data.password, user.password):
        raise WrongCredentials()

    access_token = jwt.encode(dict(data), os.environ['JWT_ACCESS_SECRET'])
    refresh_token = jwt.encode(dict(data), os.environ['JWT_REFRESH_SECRET'])

    set_user_refresh_token(user.id, refresh_token)

    return {
        'access_token': access_token,
        'refresh_token': refresh_token,
    }
