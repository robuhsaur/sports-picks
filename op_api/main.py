from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import guru




app = FastAPI()
app.include_router(guru.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000"),
        os.environ.get("CORS_HOST", "http://localhost:8082")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

