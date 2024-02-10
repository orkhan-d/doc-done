from sqlalchemy import create_engine, BIGINT
from sqlalchemy.orm import sessionmaker, DeclarativeBase, mapped_column, Mapped

from typing import Annotated

engine = create_engine('postgresql://postgres:pass@localhost:5432/docdone')
Session = sessionmaker(bind=engine, autoflush=False)

intpk = Annotated[int, mapped_column(type_=BIGINT, primary_key=True)]

class Base(DeclarativeBase): ...