import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useAuthContext } from './Auth'

function Subscribe(props) {
    const { guru_id } = useParams()
    const [guru, setGuru] = useState([])
    const [name, setName] = useState('')
    const [card_number, setcard_number] = useState('')
    const [exp, setExp] = useState('')
    const [cvv, setCvv] = useState('')
    const { token } = useAuthContext()

    useEffect(() => {
        async function getGuru() {
            const url = `${process.env.REACT_APP_API_HOST}/guru/${guru_id}`
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setGuru(data)
            }
        }
        getGuru();
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();
        const url = `${process.env.REACT_APP_API_HOST}/user/subscribeto/${guru_id}`
        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ cvv, exp, card_number, name })
        })
        const data = await response.json()
        if (response.ok) {
            console.log(data)
        }
    }


    return (
        <>
            <p>User: {guru.user_name}</p>
            <p>Description: {guru.description}</p>
            <p>Monthly Price: ${guru.price}</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="Name">Name</label>
                    <input value={name} onChange={e => setName(e.target.value)}
                        required type="text" className="form-control" id="Name" placeholder="Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="cardnumber">Card Number</label>
                    <input value={card_number} onChange={e => setcard_number(e.target.value)}
                        required type="number" className="form-control" id="cardnumber" placeholder="Card Number" />
                </div>
                <div className="mb-3">
                    <label htmlFor="expiration">Expiration</label>
                    <input value={exp} onChange={e => setExp(e.target.value)}
                        required type="text" className="form-control" id="expiration" placeholder="yy/mm" />
                </div>
                <div className="mb-3">
                    <label htmlFor="CVV">CVV</label>
                    <input value={cvv} onChange={e => setCvv(e.target.value)}
                        required type="number" className="form-control" id="cvv" placeholder="cvv" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}




export default Subscribe







