from fastapi import APIRouter
from fastapi.responses import JSONResponse
from api.documents.crud import add_document, delete_document
from api.documents.schemas import NewDocument

router = APIRouter(prefix='/documents')

@router.post('')
async def create_doc(data: NewDocument):
    doc_db = add_document(**data.model_dump())
    doc = {
        'id': doc_db.id,
        **data.model_dump()
    }

    return JSONResponse(doc, 201)

@router.delete('/{doc_id}')
async def delete_doc(doc_id: str):
    succeed = delete_document(doc_id)
    if succeed:
        return JSONResponse({
            'message': 'success'
        }, 200)
    else:
        return JSONResponse({
            'message': 'Not found'
        }, 404)