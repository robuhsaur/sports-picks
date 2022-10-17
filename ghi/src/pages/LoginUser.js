import React, { useEffect } from "react";
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'


function LoginComponent() {
    const [token, login] = useToken();

    // Other code, here
}

async function LoginUser(username, password) {
    const url = `${process.env.REACT_APP_API_HOST}/user/token`;

    const form = new FormData();
    form.append("username", username);
    form.append("password", password);

    const response = await fetch(url, {
        method: "post",
        credentials: "include",
        body: form,
    });
    if (response.ok) {
        const tokenUrl = `${process.env.REACT_APP_API_HOST}/user/token`;

        try {
            const response = await fetch(tokenUrl, {
                credentials: "include",
            });
            if (response.ok) {
                const data = await response.json();
                const token = data.token;
                // DO SOMETHING WITH THE TOKEN SO YOU CAN USE IT
                // IN REQUESTS TO YOUR NON-ACCOUNTS SERVICES
            }
        } catch (e) { }
        return false;
    }
    let error = await response.json();
    // DO SOMETHING WITH THE ERROR, IF YOU WANT


    return (
        <p> poo poo </p>
    )

}

export default LoginUser
