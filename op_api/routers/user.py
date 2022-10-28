# from typing import Optional
# from urllib import response
# from fastapi import (
#     Depends,
#     HTTPException,
#     status,
#     Response,
#     APIRouter,
#     Request,
# )
# from jwtdown_fastapi.authentication import Token
# from userauth import user_authenticator
# from pydantic import BaseModel
# from queries.user import (
#     UserSignupIn,
#     UserSignupRepository,
#     UserSignupOut,
#     DuplicateAccountError,
#     UserSubscriberRepository,
#     UserSubscribeIn,
#     UserSubscribeOut,
#     Usersubscriptions
# )

# router = APIRouter()

# class AccountForm(BaseModel):
#     username: str
#     password: str

# class AccountToken(Token):
#     account: UserSignupOut

# class HttpError(BaseModel):
#     detail: str

# @router.get("/user/token", response_model=AccountToken | None)
# async def get_token(
#     request: Request,
#     account: UserSignupOut = Depends(user_authenticator.try_get_current_account_data)
# ) -> AccountToken | None:
#     if user_authenticator.cookie_name in request.cookies:
#         return {
#             "access_token": request.cookies[user_authenticator.cookie_name],
#             "type": "Bearer",
#             "account": account,
#         }

# @router.get("/userinfo/")
# async def get_things(
#     account_data: Optional[dict] = Depends(user_authenticator.try_get_current_account_data),
# ):
#     if account_data:
#         return account_data
#     return None
                        
# @router.post("/user", response_model=AccountToken | HttpError)
# async def create_account(
#     user: UserSignupIn,
#     request: Request,
#     response: Response,
#     repo: UserSignupRepository = Depends(),
# ):
#     hashed_password = user_authenticator.hash_password(user.password)
#     try:
#         account = repo.create_user(user, hashed_password)
#     except DuplicateAccountError:
#         raise HTTPException(
#             status_code=status.HTTP_400_BAD_REQUEST,
#             detail="Cannot create an account with those credentials",
#         )
#     form = AccountForm(username=user.user_name, password=user.password)
#     token = await user_authenticator.login(response, request, form, repo)
#     return AccountToken(account=account, **token.dict())

# #-------------------------------------Sussyscribe--------------------------------------------------

# @router.post("/user/subscribeto/{guru_id}", response_model=UserSubscribeOut)
# def subscribe(
#     usersus: UserSubscribeIn,
#     guru_id: int,
#     account_data: dict = Depends(user_authenticator.get_current_account_data),
#     repo: UserSubscriberRepository = Depends()
# ):
#     user_id = account_data.get('id')
#     print(user_id)
#     return repo.subscribe_to_guru(usersus, user_id, guru_id)

# @router.get("/user/{user_id}/subscriptions", response_model=list[Usersubscriptions])
# def get_guruids_from_user(
#     user_id: int,
#     repo: UserSubscriberRepository = Depends(),
#     ):
#     return repo.get_guruids_from_user(user_id)
