from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_missing_token():
        response = client.get("/guru/undefined/form")
        assert response.status_code == 401


def test_form():
        response = client.get("/gurus/form")
        assert response.status_code == 200

        