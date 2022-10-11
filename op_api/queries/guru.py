from tkinter.messagebox import NO
from pydantic import BaseModel
from queries.pool import pool
from typing import Optional


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
    def get_a_guru(self, guru_id: int) -> Optional[GuruSignupOut]:
        try:
            with pool.connection() as conn:
                # get a cursor (something to run SQL with)
                with conn.cursor() as db:
                    # Run our SELECT statement
                    result = db.execute(
                        """
                        SELECT id
                             , user_name
                             , password
                             , description
                        FROM guru_signup
                        WHERE id = %s
                        """,
                        [guru_id]
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    else:
                        return GuruSignupOut(
                            id= record[0],
                            user_name= record[1],
                            password= record[2],
                            description= record[3]
                        )
        except Exception as e:
            print(e)
            return {"message": "Could not get that guru"}


    def get_gurus(self) -> list[GuruSignupOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        select id, user_name, password, description
                        from guru_signup
                        """
                    )
                    return [
                        GuruSignupOut(
                            id= guru[0],
                            user_name= guru[1],
                            password= guru[2],
                            description= guru[3]
                        )
                        for guru in db
                    ]
        except Exception:
            return {"message: could not get all gurus"}


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
    



