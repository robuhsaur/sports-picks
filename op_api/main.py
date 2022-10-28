from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.httpsredirect import HTTPSRedirectMiddleware
import os
from routers import guru
from authenticator import authenticator

# from userauth import user_authenticator

app = FastAPI()
app.add_middleware(HTTPSRedirectMiddleware)
app.include_router(guru.router)
# app.include_router(user.router)
app.include_router(authenticator.router, prefix="/guru")
# app.include_router(user_authenticator.router, prefix="/user")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
        # os.environ.get("REACT_APP_API_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
