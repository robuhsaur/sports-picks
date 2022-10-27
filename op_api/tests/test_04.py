from fastapi.testclient import TestClient
from main import app


client = TestClient(app)

def test_missing_token():
        response = client.get("/my-gurus")

        assert response.status_code == 401 

        