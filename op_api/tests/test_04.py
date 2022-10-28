from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_get_gurus():
        response = client.get("/gurus")
        assert response.status_code == 200




        