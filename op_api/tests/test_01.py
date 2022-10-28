from fastapi.testclient import TestClient
from main import app
from routers.guru import GuruSignupRepository
from routers.guru import MyAuthenticator
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


class FakeMyAuthenticator:
    async def login(self, response, request, form, repo ):
        return Token(**account_token)
    def hash_password(self,pw):
        return "abc123"

def test_create_guru():
    app.dependency_overrides[GuruSignupRepository]=FakeGuruSignupRepository
    app.dependency_overrides[MyAuthenticator]=FakeMyAuthenticator
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
