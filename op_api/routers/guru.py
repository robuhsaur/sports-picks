from typing import Optional
from fastapi import APIRouter, Depends, Response
from queries.guru import (
    GuruSignupIn, 
    GuruSignupRepository,
    GuruSignupOut,
    GuruFormOut, 
    GuruFormRepository,
    GuruFormIn
)

router = APIRouter()


@router.post("/gurus", response_model=GuruSignupOut)
def create_guru(
    guru: GuruSignupIn,   
    repo: GuruSignupRepository = Depends(),
):
    return repo.create(guru)

@router.get("/gurus", response_model=list[GuruSignupOut])
def get_gurus(
    repo: GuruSignupRepository = Depends()
):
    return repo.get_gurus()

@router.get("/guru/{guru_id}", response_model=Optional[GuruSignupOut])
def get_a_guru(
    guru_id: int,
    response: Response, 
    repo: GuruSignupRepository = Depends(),
)-> GuruSignupOut:
    guru = repo.get_a_guru(guru_id)
    if guru is None:
        response.status_code = 404
    return guru

#----------------------------------------------

@router.post("/gurus/form", response_model=GuruFormOut)
def create_guru_form(
    guruform: GuruFormIn,   
    repo: GuruFormRepository = Depends(),
):
    return repo.create(guruform)

@router.get("/gurus/form", response_model=list[GuruFormOut])
def get_all_forms(
    repo: GuruFormRepository = Depends()
):
    return repo.get_all_forms()

@router.get("/guru/{guru_id}/form", response_model=Optional[list[GuruFormOut]])
def get_a_guru_forms(
    guru_id: int,
    response: Response,
    repo: GuruFormRepository = Depends(),
):
    forms = repo.get_a_guru_forms(guru_id)
    if forms is None:
        response.status_code = 404
    return forms
    

