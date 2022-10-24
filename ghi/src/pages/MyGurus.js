import React, { useEffect, useState } from "react";
import { Scrollbars } from 'react-custom-scrollbars-2'
import { useNavigate } from 'react-router-dom';
import Subscribe from "../subscribe";
function Gurus(props) {
    const [gurus, setGurus] = useState([]);

    useEffect(() => {
        async function getGurus() {
            const url = `${process.env.REACT_APP_API_HOST}/gurus`
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setGurus(data)
            }
        }
        getGurus();
    }, [])

    const navigate = useNavigate();

    return (
        <div className="row justify-content-center">
            <div className="col-auto">
                <div className="card">
                    <Scrollbars style={{ width: 500, height: 300 }}>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th className="th-sm">Guru
                                    </th>
                                    <th className="th-sm">Description
                                    </th>
                                    <th className="th-sm">Monthly Price
                                    </th>
                                    <th className="th-sm">subscribe
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {gurus.map(guru => {
                                    return (
                                        <>
                                            <tr key={guru.id}>
                                                <td>{guru.user_name}</td>
                                                <td>{guru.description}</td>
                                                <td>{guru.price}</td>
                                                <td><button onClick={() => navigate(`/gurus/${guru.id}`)} type="button"
                                                    className="btn btn-info btn-sm btn-block">Subscribe</button></td>
                                            </tr>
                                            <Subscribe user_name={guru.user_name} />
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </Scrollbars>
                </div>
            </div>
        </div>
    )
}

export default Gurus