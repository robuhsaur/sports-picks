import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useAuthContext } from './Auth'




function Subscribe(props) {
    const { guru_id } = useParams()
    const [guru, setGuru] = useState([])
    const [forms, setForms] = useState([])

    // const [name, setName] = useState('')
    // const [card_number, setcard_number] = useState('')
    // const [exp, setExp] = useState('')
    // const [cvv, setCvv] = useState('')
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
    }, [guru_id])


    // useEffect(() => {
    //     async function getForms() {
    //         const url = `${process.env.REACT_APP_API_HOST}/guru/${guru_id}/form`
    //         const response = await fetch (url, {
    //             method: 'post',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${token}`,
    //             },
    //             });
    //         if (response.ok) {
    //             const data = await response.json();
    //             setForms(data)
    //         }
    //     }
    //     getForms();
    // }, [])


    useEffect(() => {
        async function getGuruForms() {
            console.log(guru_id);
            const guruForms = `http://localhost:8000/guru/${guru_id}/form`;
            const response = await fetch(guruForms, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const formData = await response.json();
            console.log(formData, "------Formadadasd");
            if (response.ok) {
                if (formData) {
                    setForms(formData);
                    console.log(formData, "-----getguruform: formId");
                }
            }
        }
        getGuruForms();
    },);

    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     const url = `${process.env.REACT_APP_API_HOST}/user/subscribeto/${guru_id}`
    //     const response = await fetch(url, {
    //         method: 'post',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: `Bearer ${token}`,
    //         },
    //         body: JSON.stringify({ cvv, exp, card_number, name })
    //     })
    //     const data = await response.json()
    //     if (response.ok) {
    //         console.log(data)
    //     }
    // }


    return (
        <>
            <p>User: {guru.user_name}</p>
            <p>Description: {guru.description}</p>
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Pick Form</th>
                            <th>Pick Detail</th>
                        </tr>
                    </thead>
                    <tbody>

                        {forms.map(form => {
                            return (
                                <tr key={form.id}>
                                    <td>{form.pick}</td>
                                    <td>{form.pick_detail}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </div>

        </>
    )
}




export default Subscribe