import dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.auth.routers import router

dotenv.load_dotenv()

app = FastAPI(debug=True)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)