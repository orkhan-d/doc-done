from fastapi import APIRouter, Response
from api.auth.crud import add_user, login_user
from api.auth.schemas import LoginData, RegisterData

router = APIRouter(prefix='/auth')

@router.post('/login')
def login(data: LoginData):
    res = login_user(data)

    return Response(res)

@router.post('/register')
def register(data: RegisterData):
    add_user(data)

    return Response({
        'message': 'Succesfully registered!'
    }, 201)