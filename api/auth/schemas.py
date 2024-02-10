from pydantic import BaseModel

class LoginData(BaseModel):
    email: str
    password: str

class RegisterData(BaseModel):
    login: str
    email: str
    password: str