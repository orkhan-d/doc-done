from typing import Any, Dict
from typing_extensions import Annotated, Doc
from fastapi import HTTPException

class EmailExists(HTTPException):
    def __init__(self) -> None:
        super().__init__(422, {
            'code': 422,
            'email': 'Given email already exists',
        })

class WrongCredentials(HTTPException):
    def __init__(self) -> None:
        super().__init__(422, {
            'code': 422,
            'email': 'Wrong credentials',
            'password': 'Wrong credentials',
        })