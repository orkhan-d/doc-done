import dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.auth.routers import router

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

app.include_router(router, prefix='/api')