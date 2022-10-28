# from pydantic import BaseModel
# from queries.pool import pool
# from typing import Optional


# class DuplicateAccountError(ValueError):
#     pass


# class UserSignupIn(BaseModel):
#     user_name: str
#     password: str


# class UserSignupOut(BaseModel):
#     id: int
#     user_name: str


# class UserSignupOutWithPassword(UserSignupOut):
#     hashed_password: str


# class UserSubscribeIn(BaseModel):
#     name: str
#     card_number: int
#     exp: str
#     cvv: int
#     # guru_id: int


# class Usersubscriptions(BaseModel):
#     guru_id: int


# class UserSubscribeOut(BaseModel):
#     id: int
#     name: str
#     card_number: int
#     exp: str
#     cvv: int
#     user_id: int
#     guru_id: int


# class UserSignupRepository:
#     def get_a_user(
#         self, user_name: str
#     ) -> Optional[UserSignupOutWithPassword]:
#         try:
#             with pool.connection() as conn:
#                 # get a cursor (something to run SQL with)
#                 with conn.cursor() as db:
#                     # Run our SELECT statement
#                     result = db.execute(
#                         """
#                         SELECT id
#                              , user_name
#                              , password
#                         FROM user_signup
#                         WHERE user_name = %s
#                         """,
#                         [user_name],
#                     )
#                     record = result.fetchone()
#                     if record is None:
#                         return None
#                     else:
#                         return UserSignupOutWithPassword(
#                             id=record[0],
#                             user_name=record[1],
#                             hashed_password=record[2],
#                         )
#         except Exception as e:
#             print(e)
#             return {"message": "Could not get that guru"}

#     def create_user(
#         self, user: UserSignupIn, hashed_password: str
#     ) -> UserSignupOutWithPassword:
#         with pool.connection() as conn:
#             with conn.cursor() as db:
#                 result = db.execute(
#                     """
#                     insert into user_signup
#                         (user_name, password)
#                     values
#                         (%s, %s)
#                     returning id, user_name, password;
#                     """,
#                     [
#                         user.user_name,
#                         hashed_password,
#                     ],
#                 )
#                 user = result.fetchone()
#                 return UserSignupOutWithPassword(
#                     id=user[0], user_name=user[1], hashed_password=user[2]
#                 )


# class UserSubscriberRepository:
#     def subscribe_to_guru(
#         self, usersus: UserSubscribeIn, user_id, guru_id: int
#     ) -> UserSubscribeOut:
#         with pool.connection() as conn:
#             with conn.cursor() as db:
#                 result = db.execute(
#                     """
#                     insert into subscriptions
#                         (name, card_number, exp, cvv, user_id, guru_id)
#                     values
#                         (%s, %s, %s, %s, %s, %s)
#                     returning id, name, card_number, exp, cvv, user_id,
#                         guru_id;
#                     """,
#                     [
#                         usersus.name,
#                         usersus.card_number,
#                         usersus.exp,
#                         usersus.cvv,
#                         user_id,
#                         guru_id,
#                     ],
#                 )
#                 subscription = result.fetchone()
#                 return UserSubscribeOut(
#                     id=subscription[0],
#                     name=subscription[1],
#                     card_number=subscription[2],
#                     exp=subscription[3],
#                     cvv=subscription[4],
#                     user_id=subscription[5],
#                     guru_id=subscription[6],
#                 )

#     def get_guruids_from_user(self, user_id: int) -> list[Usersubscriptions]:
#         try:
#             with pool.connection() as conn:
#                 with conn.cursor() as db:
#                     result = db.execute(
#                         """
#                         SELECT guru_id
#                         FROM subscriptions
#                         WHERE user_id = %s
#                         """,
#                         [user_id],
#                     )
#                     return [
#                         Usersubscriptions(guru_id=guru[0]) for guru in result
#                     ]

#         except Exception as e:
#             print(e)
#             return {"message": "User has no subscriptions"}
