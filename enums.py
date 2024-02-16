import enum


class Alignment(enum.Enum):
    LEFT = 'left'
    RIGHT = 'right'
    JUSTIFY = 'justify'
    CENTER = 'center'

class ScriptType(enum.Enum):
    SUBSCRIPT = 'sub'
    SUPERSCRIPT = 'sup'
    NORMAL = 'normal'