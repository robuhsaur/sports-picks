from fastapi.testclient import TestClient
from main import app


client = TestClient(app)


def test_create_user():
        response = client.post(
        "/user",
        json={
  "user_name": "test_case_01",
  "password": "test_case_password"
},
    )
        assert response.status_code == 200
