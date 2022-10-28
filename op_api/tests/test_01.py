from fastapi.testclient import TestClient
from main import app
from routers.guru import GuruSignupRepository, get_login, get_hash
from jwtdown_fastapi.authentication import Token

client = TestClient(app)

account_in = {
            "user_name": "string_test1",
            "password": "string1",
            "description": "string",
            "price": 0
        }

account_out = {
            "user_name": "string_test1",
            "description": "string",
            "price": 0,
            "id": 0
        }


account_token = {
    "access_token": "abc123",
    "token_type": "Bearer",
    "account": account_out
}

class FakeGuruSignupRepository:
    def create(self, guru, hashed_password):
        return account_out
    def get_gurus(self):
        return []

def get_fake_login():
    async def login(response, request, form, repo ):
        return Token(**account_token)
    return login

def get_fake_hash_pass():
    def hash_password(pw):
        return "abc123"
    return hash_password

def test_create_guru():
    app.dependency_overrides[GuruSignupRepository]=FakeGuruSignupRepository
    app.dependency_overrides[get_hash]=get_fake_hash_pass
    app.dependency_overrides[get_login]=get_fake_login
    response = client.post(
        "/gurus",
        json=account_in
    )
    print(response.json())
    assert response.status_code == 200
    assert response.json() == {
        "access_token": "abc123",
        "token_type": "Bearer",
        "account": account_out,
    }
