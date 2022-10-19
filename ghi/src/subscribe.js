import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Subscribe(props) {
    const { guru_id } = useParams()
    const [guru, setGuru] = useState([])

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
    return (
        <>
            <p>User: {guru.user_name}</p>
            <p>Description: {guru.description}</p>
            <p>Monthly Price: ${guru.price}</p>
            <form>
            <div className="mb-3">
                <label htmlFor="username">User Name</label>
                <input type="username" className="form-control" id="exampleInputEmail1" aria-describedby="username" placeholder="UserName"/>
                </div>
            <div className="mb-3">
                <label htmlFor="username">User Name</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div> 
            <div className="mb-3">
                <label htmlFor="username">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">Forgot UserName? To Fuckin Bad</small>
            </div>  
            <div className="mb-3">
                <label htmlFor="username">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">Forgot UserName? To Fuckin Bad</small>
            </div>   
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </>
    )
}

export default Subscribe







