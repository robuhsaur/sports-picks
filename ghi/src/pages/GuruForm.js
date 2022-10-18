import React, { useEffect } from "react";
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'


function BootStrapInput(props) {
    const { id, placeholder, labelText, value, onChange, type } = props


    return (
        <div className="mb-4">
            <label htmlFor={id}>{labelText}</label>
            <input value={value} onChange={onChange} type={type} className="form-control" id={id} placeholder={placeholder} />
        </div>
    )
}

function GuruForm(props) {

    const [pick, setPick] = useState('')
    const [pickDetail, setPickDetail] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();
        const url = `http://localhost:8000/gurus/form`
        const response = await fetch(url, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ pick, pickDetail })
        })

        const data = await response.json()

        if (response.ok) {
            Navigate("/guru/signup")
        } else {
            console.log("didn't work uh oh")
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
        </form>
    )
}

export default GuruForm


// http://localhost:8000/guru/form