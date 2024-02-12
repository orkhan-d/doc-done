import json
from fastapi import APIRouter, Body, Request, Response
from api.auth.crud import add_user, login_user
from api.auth.schemas import LoginData, RegisterData

router = APIRouter(prefix='/auth')

@router.post('/login')
async def login(request: Request):
    data = LoginData(**(await request.json()))
    res = login_user(data)

    return Response(json.dumps(res))

@router.post('/register')
async def register(request: Request):
    data = RegisterData(**(await request.json()))
    add_user(data)

    return Response({
        'message': 'Succesfully registered!'
    }, 201)