from fastapi.testclient import TestClient
from main import app


client = TestClient(app)


def test_create_guru():
    response = client.post(
        "/gurus",
        json={
            "user_name": "string_test1",
            "password": "string1",
            "description": "string",
            "price": 0
        },
    )
    assert response.status_code == 200
