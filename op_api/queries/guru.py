from pydantic import BaseModel
from queries.pool import pool

class GuruSignupIn(BaseModel):
    user_name: str
    password: str
    description: str

class GuruSignupOut(BaseModel):
    id: int
    user_name: str
    password: str
    description: str
    
class GuruSignupRepository:
    def create(self, guru: GuruSignupIn) -> GuruSignupOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    insert into guru_signup
                        (user_name, password, description)
                    values
                        (%s, %s, %s)
                    returning id;
                    """,
                    [
                    guru.user_name, 
                    guru.password, 
                    guru.description
                    ]
                )
                id = result.fetchone()[0]
                old_data = guru.dict()
                return GuruSignupOut(id=id, **old_data)



