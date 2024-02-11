from sqlalchemy import ForeignKey, BIGINT
from api.db import Base, intpk, Mapped, mapped_column

class User(Base):
    __tablename__ = 'users'

    id: Mapped[int] = mapped_column(type_=BIGINT, primary_key=True)
    name: Mapped[str] = mapped_column()
    email: Mapped[str] = mapped_column()
    password: Mapped[str] = mapped_column()

class Token(Base):
    __tablename__ = 'user_tokens'

    user_id: Mapped[int] = mapped_column(ForeignKey('users.id'), primary_key=True)
    refresh_token: Mapped[str] = mapped_column()