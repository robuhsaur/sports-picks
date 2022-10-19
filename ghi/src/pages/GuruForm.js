import React, { useEffect } from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../Auth'



function BootStrapInput(props) {
    const { id, placeholder, labelText, value, onChange, type } = props


    return (
        <div className="mb-4">
            <label htmlFor={id}>{labelText}</label>
            <input value={value} onChange={onChange} type={type} className="form-control" id={id} placeholder={placeholder} />
        </div>
    )
}

// if form is there for specific guru (token?)
// make a get request from /guru/{guru_id}/form
// if response is null, post
// else post form to /gurus/form 


function GuruForm(props) {
    const { token } = useAuthContext()
    console.log(token)
    const [pick, setPick] = useState('')
    const [pickDetail, setPickDetail] = useState('')
    const navigate = useNavigate()
    const [guruId, setGuruId] = useState()

    async function getGuruId(e) {
        e.preventDefault();

        const guruIdUrl = `http://localhost:8000/guruinfo`
        const response = await fetch(guruIdUrl, {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
        const data = await response.json()
        const guruId = data["id"] // guru id
        setGuruId(guruId)
        console.log(guruId)
    }

    async function getGuruForms(e) {
        e.preventDefault();
        const guru_id = guruId
        const guruForms = `http://localhost:8000/guru/${guru_id}/form`
        const response = await fetch(guruForms, {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        console.log(data)
        if (response.ok) {
            console.log("hello it work")
        }

    }





    async function handleSubmit(e) {
        e.preventDefault();
        const pick_detail = pickDetail
        const url = `http://localhost:8000/gurus/form`
        const response = await fetch(url, {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ pick, pick_detail })
        })
        const data = await response.json()

        if (response.ok) {
            console.log("not stinky")
            navigate("/guru/signup")
        } else {
            console.log("uh oh stinky")
        }
    }

    return (
        <form>
            <BootStrapInput
                id="pick"
                placeholder="Guru Pick"
                labelText="Put ya pick here"
                value={pick}
                onChange={e => setPick(e.target.value)}
                type="text" />
            <BootStrapInput
                id="pickDetail"
                placeholder="Pick Detail"
                labelText="Put ya Odds here"
                value={pickDetail}
                onChange={e => setPickDetail(e.target.value)}
                type="text" />

            <button onClick={handleSubmit}> Submit </button>
            <button onClick={getGuruId}> ID </button>
            <button onClick={getGuruForms}> Forms </button>
        </form>
    )
}
export default GuruForm


// http://localhost:8000/guru/form