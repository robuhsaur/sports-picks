from fastapi.testclient import TestClient
from main import app


client = TestClient(app)

def test_guru():
    response = client.post(
        "/gurus",
        json={
            "user_name": "test-login",
            "password": "string",
            "description": "stri",
            "price": 0
        },
    )
    assert response.status_code == 200

def test_guru_login():
        response = client.post("/guru/token/",
        json = {
    "user_name": "test-login",
    "password": "string",    
}, )
        assert response.status_code == 307 # redirect to guru page 


        
