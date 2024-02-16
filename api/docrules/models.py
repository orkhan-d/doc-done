from sqlalchemy import ForeignKey, BIGINT, Enum
from api.db import Base, uuidpk, Mapped, mapped_column

from api.enums import Alignment, ScriptType

class DocFormat(Base):
    __tablename__ = 'doc_formats'

    id: Mapped[uuidpk] = mapped_column(type_=BIGINT, primary_key=True)
    name: Mapped[str] = mapped_column()
    user_id: Mapped[int] = mapped_column(ForeignKey('users.id'), nullable=True)

class DocRule(Base):
    __tablename__ = 'doc_rules'

    id: Mapped[uuidpk] = mapped_column(type_=BIGINT, primary_key=True)
    text_type: Mapped[str] = mapped_column(ForeignKey('text_types.id'))
    doc_format_id: Mapped[str] = mapped_column(ForeignKey('doc_formats.id'))

    align: Mapped[Alignment] = mapped_column(type_=Enum(Alignment))
    # TODO: add font-family
    font_size: Mapped[int] = mapped_column()

    bold: Mapped[bool] = mapped_column()
    cursive: Mapped[bool] = mapped_column()
    underline: Mapped[bool] = mapped_column()
    strikethrough: Mapped[bool] = mapped_column()
    
    script_type: Mapped[ScriptType] = mapped_column(type_=Enum(ScriptType))
    
    font_color: Mapped[str] = mapped_column()
    bg_color: Mapped[str] = mapped_column()

    line_spacing: Mapped[int] = mapped_column()
    letter_spacing: Mapped[int] = mapped_column()

class TextType(Base):
    __tablename__ = 'text_types'

    id: Mapped[uuidpk] = mapped_column(type_=BIGINT, primary_key=True)
    name: Mapped[str] = mapped_column()