from fastapi import APIRouter, Response
from api.auth.crud import add_user, login_user
from api.auth.schemas import LoginData, RegisterData

router = APIRouter(prefix='/auth')

@router.post('/login')
def login(data: LoginData, response: Response):
    res = login_user(data)
    response.set_cookie('refresh_token', res['refresh_token'])

    return res

@router.post('/register')
def register(data: RegisterData):
    add_user(data)