import dotenv
from fastapi import FastAPI
from api.auth.routers import router

dotenv.load_dotenv()

app = FastAPI(debug=True)
app.include_router(router)