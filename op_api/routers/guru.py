from fastapi import APIRouter, Depends
from queries.guru import GuruSignupIn, GuruSignupRepository
router = APIRouter()


@router.post("/gurus")
def create_guru(
    guru: GuruSignupIn,
    repo: GuruSignupRepository = Depends(),
):
    return repo.create(guru)
