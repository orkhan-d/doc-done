from pydantic import BaseModel, validator
from api.auth.crud import get_user_by_id

class NewDocument(BaseModel):
    path: str
    user_id: int

    @validator('user_id')
    def validate_name(cls, value: int):
        if not get_user_by_id(value):
            raise ValueError('User does not exist!')
        return value