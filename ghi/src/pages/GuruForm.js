import React, { useEffect } from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../Auth'



function BootStrapInput(props) {
    const { id, placeholder, labelText, value, onChange, type } = props


    return (
        <div className="mb-4">
            <label htmlFor={id}>{labelText}</label>
            <input required value={value} onChange={onChange} type={type} className="form-control" id={id} placeholder={placeholder} />
        </div>
    )
}




function GuruForm(props) {
    const { token } = useAuthContext()
    const [pick, setPick] = useState('')
    const [pickDetail, setPickDetail] = useState('')
    const navigate = useNavigate()
    const [guruId, setGuruId] = useState()
    const [formId, setFormId] = useState(0)
    const [isTrue, setisTrue] = useState(false)


    useEffect(() => {
        async function getGuruId() {
            const guruIdUrl = `http://localhost:8000/guruinfo`
            const response = await fetch(guruIdUrl, {
                method: "get",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log(response)
            const data = await response.json()
            console.log(data)
            const guruId = data["id"] // guru id
            console.log(guruId)
            setGuruId(guruId)
        }
        getGuruId()
    }, [])

    async function getGuruForms(e) {
        e.preventDefault();
        const guru_id = guruId
        console.log(guru_id)
        const guruForms = `http://localhost:8000/guru/${guru_id}/form`
        const response = await fetch(guruForms, {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
        const formData = await response.json()
        if (response.ok) {
            const guruForm = formData[0]
            const formId = guruForm["id"]
            setFormId(formId)
            console.log(formId)
        }
    }

    async function updateGuruForm(e) {
        e.preventDefault();
        const guru_id = guruId
        const form_id = formId
        const pick_detail = pickDetail
        console.log(formId)
        const putUrl = `http://localhost:8000/guru/${guru_id}/form/${form_id}`
        const response = await fetch(putUrl, {
            method: "put",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ pick, pick_detail })
        })
        const data = await response.json()

        if (response.ok) {
            console.log("form has been updated")
            console.log(data)
        } else {
            console.log("form did not update")
        }
    }


    async function handleSubmit(e) {
        e.preventDefault();
        setisTrue(true)
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
            console.log("post")
        } else {
            console.log("no post")
        }
    }



    async function finalForm(e) {
        e.preventDefault();
        await getGuruForms(e)
        console.log(formId)
        if (!isTrue) {
            handleSubmit(e)
            console.log("getGuruForm")
        } else {
            updateGuruForm(e)
            console.log("updating")
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
            <button onClick={getGuruForms}> Forms </button>
            <button onClick={updateGuruForm}> Update </button>
            <button onClick={finalForm}> Final Form </button>
        </form>
    )
}

export default GuruForm