from fastapi import HTTPException

class UserDoesNotExists(HTTPException):
    def __init__(self) -> None:
        super().__init__(422, {
            'code': 422,
            'email': 'User does not exists',
        })

class WrongCredentials(HTTPException):
    def __init__(self) -> None:
        super().__init__(422, {
            'code': 422,
            'email': 'Wrong credentials',
            'password': 'Wrong credentials',
        })