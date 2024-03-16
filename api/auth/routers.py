import json
from re import RegexFlag
from fastapi import APIRouter, Body, Request, Response
from fastapi.responses import JSONResponse
from api.auth.crud import add_user, login_user
from api.auth.schemas import LoginData, RegisterData

router = APIRouter(prefix='/auth')

from datetime import datetime as dt
import pytz

@router.post('/login')
async def login(data: LoginData):
    res = login_user(data)

    return JSONResponse(res, 200)

@router.post('/register')
async def register(data: RegisterData):
    add_user(data)

    return JSONResponse({"message": "success"}, 201)