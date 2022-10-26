import os
from fastapi import Depends
from jwtdown_fastapi.authentication import Authenticator
from queries.guru import (
    GuruSignupRepository,
    GuruSignupOut,
    GuruSignupOutWithPassword
)


class MyAuthenticator(Authenticator):
    async def get_account_data(
        self,
        user_name: str,
        accounts: GuruSignupRepository,
    ):
        # Use your repo to get the account based on the
        # username (which could be an email)
        return accounts.get_a_guru(user_name)

    def get_account_getter(
        self,
        repo: GuruSignupRepository = Depends(),
    ):
        # Return the accounts. That's it.
        return repo

    def get_hashed_password(self, account: GuruSignupOutWithPassword):
        # Return the encrypted password value from your
        # account object
        return account.hashed_password

    def get_account_data_for_cookie(self, account: GuruSignupOut):
        # Return the username and the data for the cookie.
        # You must return TWO values from this method.
        return account.user_name, GuruSignupOut(**account.dict())


authenticator = MyAuthenticator(os.environ["SIGNING_KEY"])
