import json
from fastapi import APIRouter, Body, Request, Response
from fastapi.responses import JSONResponse
from api.auth.crud import add_user, login_user
from api.auth.schemas import LoginData, RegisterData

router = APIRouter(prefix='/auth')

from datetime import datetime as dt
import pytz

@router.post('/login')
async def login(request: Request, response: Response):
    data = LoginData(**(await request.json()))
    res = login_user(data)

    # response = JSONResponse(res)

    expire_dt = dt.utcnow().timestamp()+30*24*60*60

    # response.set_cookie('refresh-token', res['refresh_token'], max_age=30*24*60*60, secure=False, domain='localhost',
    #                     samesite='lax', expires=expire_dt.isoformat())

    response.set_cookie('refresh-token', res['refresh_token'], httponly=True, samesite='strict',
                        expires=int(expire_dt))

    return json.dumps(res, indent=4)

@router.post('/register')
async def register(request: Request, response: Response):
    data = RegisterData(**(await request.json()))
    add_user(data)
    res = login_user(**dict(data))

    expire_dt = dt.utcnow().timestamp()+30*24*60*60

    response.set_cookie('refresh-token', res['refresh_token'], httponly=True, samesite='strict',
                        expires=int(expire_dt))

    return JSONResponse(res, 201)