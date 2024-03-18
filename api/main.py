import dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.auth.routes import router as authRouter
from api.documents.routes import router as docsRouter

dotenv.load_dotenv()

origins = [
    "http://localhost:3000"
]

app = FastAPI(debug=True)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(authRouter, prefix='/api')
app.include_router(docsRouter, prefix='/api')