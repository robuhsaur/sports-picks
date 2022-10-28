from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_create_guru_error():
    response = client.post(
        "/gurus",
        json={
            "user_name": "error_test",
            "password": "string1",
            "description": "string",
            "price": "string"
        },
    )

    assert response.status_code == 422

def test_get_gurus():
    response = client.get("/gurus")
    assert response.status_code == 200
