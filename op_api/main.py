from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import guru
from authenticator import authenticator
# from userauth import user_authenticator

app = FastAPI()
app.include_router(guru.router)
# app.include_router(user.router)
app.include_router(authenticator.router, prefix="/guru")
# app.include_router(user_authenticator.router, prefix="/user")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000"),
        os.environ.get("CORS_HOST", "http://localhost:8082"),
        os.environ.get("CORS_HOST", None),
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
