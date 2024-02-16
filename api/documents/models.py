from sqlalchemy import ForeignKey, BIGINT
from api.db import Base, uuidpk, Mapped, mapped_column

class Document(Base):
    __tablename__ = 'documents'

    id: Mapped[uuidpk] = mapped_column(type_=BIGINT, primary_key=True)
    path: Mapped[str] = mapped_column()
    user_id: Mapped[int] = mapped_column(ForeignKey('users.id'))