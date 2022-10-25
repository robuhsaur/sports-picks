from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_get_sports():
    
    response = client.get("/sportslist")

    assert response.status_code == 404
