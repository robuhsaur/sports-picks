from fastapi.testclient import TestClient
from main import app


client = TestClient(app)

def test_guru_info():
        response = client.get("/guruinfo")
        assert response.status_code == 200
