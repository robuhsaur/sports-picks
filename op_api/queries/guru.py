from tkinter.messagebox import NO
from pydantic import BaseModel
from queries.pool import pool
from typing import Optional


class DuplicateAccountError(ValueError):
    pass

class GuruSignupIn(BaseModel):
    user_name: str
    password: str
    description: str
    price: int

class GuruSignupOut(BaseModel):
    id: int
    user_name: str
    description: str
    price: int

class GuruSignupOutWithPassword(GuruSignupOut):
    hashed_password: str

class GuruFormIn(BaseModel):
    pick: str
    pick_detail: str

class GuruFormInwithid(GuruFormIn):
    guru_id: int

class GuruFormOut(BaseModel):
    id: int
    pick: str
    pick_detail: str
    guru_id: int
    
class GuruSignupRepository:
    def get_a_guru(self, user_name: str) -> Optional[GuruSignupOutWithPassword]:
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
                             , price
                        FROM guru_signup
                        WHERE user_name = %s
                        """,
                        [user_name]
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    else:
                        return GuruSignupOutWithPassword(
                            id= record[0],
                            user_name= record[1],
                            hashed_password= record[2],
                            description= record[3],
                            price= record[4]
                        )
        except Exception as e:
            print(e)
            return {"message": "Could not get that guru"}

    def create(self, guru: GuruSignupIn, hashed_password: str) -> GuruSignupOutWithPassword:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    insert into guru_signup
                        (user_name, password, description, price)
                    values
                        (%s, %s, %s, %s)
                    returning id, user_name, password, description, price;
                    """,
                    [
                    guru.user_name, 
                    hashed_password, 
                    guru.description,
                    guru.price
                    ]
                )
                user = result.fetchone()
                return GuruSignupOutWithPassword(
                        id = user[0],
                        user_name= user[1],
                        hashed_password= user[2],
                        description= user[3],
                        price= user[4]
                    )
                # id = result.fetchone()[0]
                # old_data = guru.dict()
                # print(old_data)
                # return GuruSignupOut(id=id, **old_data)

    def get_gurus(self) -> list[GuruSignupOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        select id, user_name, description, price
                        from guru_signup
                        """
                    )
                    return [
                        GuruSignupOut(
                            id= guru[0],
                            user_name= guru[1],
                            description= guru[2],
                            price= guru[3]
                        )
                        for guru in db
                    ]
        except Exception:
            return {"message: could not get all gurus"}




#---------------------------------------
class GuruFormRepository:

    def get_a_guru_forms(self, guru_id:int)-> Optional[list[GuruFormOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                            """
                            SELECT guru_form.id
                                , guru_form.pick
                                , guru_form.pick_detail
                                , guru_form.guru_id
                            FROM guru_signup
                            inner join guru_form
                            on (guru_signup.id = guru_form.guru_id)
                            WHERE guru_signup.id = %s
                            """,
                            [guru_id]
                    )
                    forms = [
                            GuruFormOut(
                                id= form[0],
                                pick= form[1],
                                pick_detail= form[2],
                                guru_id= form[3]
                            )
                            for form in result
                    ]
                    if forms == []:
                        return None
                    return forms
        except Exception as e:
                print(e)
                return {"message": "Could not get that guru"}

    def create(self, guruform: GuruFormIn, guru_id) -> GuruFormOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                        insert into guru_form
                            (pick, pick_detail, guru_id)
                        values
                            (%s, %s, %s)
                        returning id, pick, pick_detail, guru_id
                    """,
                    [
                        guruform.pick,
                        guruform.pick_detail,
                        guru_id
                    ]
                    
                )
                form = result.fetchone()
                return GuruFormOut(
                        id= form[0],
                        pick= form[1],
                        pick_detail= form[2],
                        guru_id= form[3],
                    )

    def get_all_forms(self) -> list[GuruFormOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        select id, pick, pick_detail, guru_id
                        from guru_form
                        """
                    )
                    return [
                        GuruFormOut(
                            id= form[0],
                            pick= form[1],
                            pick_detail= form[2],
                            guru_id= form[3]
                        )
                        for form in db
                    ]
        except Exception:
            return {"message: could not get all gurus"}

    def update_guru_form(self, guruform:GuruFormIn, guru_id:int, form_id:int)-> GuruFormOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        update guru_form
                        set pick = %s
                         ,  pick_detail = %s
                         ,  guru_id = %s
                         where id = %s
                        """,
                        [
                            guruform.pick,
                            guruform.pick_detail,
                            guru_id,
                            form_id
                        ]
                    )
                    old_data = guruform.dict()
                    return GuruFormOut(id=form_id, guru_id=guru_id, **old_data)
        except Exception as e:
                print(e)
                return {"message": "Could not get that guru"}
