from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_create_guru_error():
    response = client.post(
        "/gurus",
        json={
            "user_name": "error",
            "password": "string",
            "description": "string",
            "price": "string"
        },
    )

    assert response.status_code == 422
