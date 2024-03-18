from api.documents.models import Document
from api.db import Session

def add_document(path: str, user_id: int):
    with Session.begin() as sess:
        doc = Document(path=path, user_id=user_id)
        sess.add(doc)
        sess.flush([doc])
        sess.expunge(doc)
        return doc
    
def delete_document(doc_id: str):
    with Session.begin() as sess:
        return sess.query(Document).filter(Document.id==doc_id).delete()