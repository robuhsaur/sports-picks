from typing import Optional
from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator
from pydantic import BaseModel
from queries.guru import (
    GuruSignupIn, 
    GuruSignupRepository,
    GuruSignupOut,
    GuruSignupPickOut,
    GuruFormOut, 
    GuruFormRepository,
    GuruFormIn,
    DuplicateAccountError,
    GuruSignupOutWithPassword
)
from authenticator import MyAuthenticator

router = APIRouter()

class AccountForm(BaseModel):
    username: str
    password: str

class AccountToken(Token):
    account: GuruSignupOut

class HttpError(BaseModel):
    detail: str

@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: GuruSignupOut = Depends(authenticator.try_get_current_account_data)
) -> AccountToken | None:
    if authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }

@router.get("/guruinfo")
async def get_guru_info(
    account_data: Optional[dict] = Depends(authenticator.try_get_current_account_data),
):
    if account_data:
        return account_data
    return None


async def get_hash():
    return authenticator.hash_password

async def get_login():
    return authenticator.login



@router.post("/gurus", response_model=AccountToken | HttpError)
async def create_account(
    guru: GuruSignupIn,
    request: Request,
    response: Response,
    repo: GuruSignupRepository = Depends(),
    hash_password = Depends(get_hash),
    login = Depends(get_login)
):
    print("\n\n\n create_account begins here \n\n\n ")
    hashed_password = hash_password(guru.password)
    try:
        print("----before account----")
        account = repo.create(guru, hashed_password)
        print(account, "--printing account from create_account--")
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = AccountForm(username=guru.user_name, password=guru.password)
    token = await login(response, request, form, repo)
    return AccountToken(account=account, **token.dict())


@router.get("/gurus", response_model=list[GuruSignupOut])
def get_gurus(
    repo: GuruSignupRepository = Depends(),
    # account: UserSignupOut = Depends(user_authenticator.try_get_current_account_data)
):
    return repo.get_gurus()

# @router.get("/my-gurus", response_model=list[GuruSignupPickOut])
# def get_gurus(
#     repo: GuruSignupRepository = Depends(),
#     repoSub: UserSubscriberRepository = Depends(),
#     account_data: dict = Depends(authenticator.get_current_account_data),
#     # account: UserSignupOut = Depends(user_authenticator.try_get_current_account_data)
# ):
#     user_id = account_data.get('id')
#     # get guru ids
#     guru_ids = repoSub.get_guruids_from_user(user_id)
#     print("guru_ids", guru_ids)
#     return repo.get_gurus_with_user_id(guru_ids)


@router.get("/guru/{guru_id}", response_model=Optional[GuruSignupOut])
def get_a_guru(
    guru_id: int,
    response: Response, 
    repo: GuruSignupRepository = Depends(),
)-> GuruSignupOut:
    guru = repo.get_guru_byId(guru_id)
    if guru is None:
        response.status_code = 404
    return guru


# @router.post("/gurus", response_model=GuruSignupOut)
# def create_guru(
#     guru: GuruSignupIn,   
#     repo: GuruSignupRepository = Depends(),
# ):
#     return repo.create(guru)

#--------------------------GURU-FORMS--------------------

@router.post("/gurus/form", response_model=GuruFormOut)
def create_guru_form(
    guruform: GuruFormIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: GuruFormRepository = Depends(),
):
    guru_id = account_data.get('id')
    return repo.create(guruform, guru_id)



@router.get("/gurus/form", response_model=list[GuruFormOut])
def get_all_forms(
    repo: GuruFormRepository = Depends()
):

    return repo.get_all_forms()

@router.get("/guru/{guru_id}/form", response_model=Optional[list[GuruFormOut]])
def get_a_guru_forms(
    guru_id: int,
    response: Response,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: GuruFormRepository = Depends(),
):
    return repo.get_a_guru_forms(guru_id)

        
@router.put("/guru/{guru_id}/form/{form_id}", response_model=GuruFormOut)
def update_guru_form(
        guru_id:int,
        form_id:int,
        guruform: GuruFormIn,
        repo: GuruFormRepository = Depends()
    ) -> GuruFormOut:
    return repo.update_guru_form(guruform, guru_id, form_id)
