import React, { useEffect, useState } from "react";
import { Scrollbars } from 'react-custom-scrollbars-2'
import { useNavigate } from 'react-router-dom';

function MyGurus(props) {
        const [gurus, setGurus] = useState([]);

        useEffect(() => {
            async function getGurus() {
                const url = `${process.env.REACT_APP_API_HOST}/gurus`
                const response = await fetch(url);
                if(response.ok){
                    const data = await response.json();
                    setGurus(data)
                }
            }
            getGurus();
        }, [])

        const navigate = useNavigate();

        return (
            <div class="row justify-content-center">
                <div class="col-auto">
                    <div class="card">
                        <Scrollbars style={{ width: 500, height: 300 }}>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th class="th-sm">Guru
                                        </th>
                                        <th class="th-sm">Description
                                        </th>
                                        <th class="th-sm">Monthly Price
                                        </th>
                                        <th class="th-sm">subscribe
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {gurus.map(guru => {
                                        return (
                                            
                                            <tr key={guru.id}>
                                            <td>{guru.user_name}</td>
                                            <td>{guru.description}</td>
                                            <td>{guru.user_name}</td>
                                            <td><button onClick={()=> navigate(`/guru/${guru.id}`)} type="button" class="btn btn-info btn-sm btn-block">Subscribe</button>
                                            </td>
                                        </tr>
                                        )
                                    } )}
                                </tbody>
                            </table>
                        </Scrollbars>
                    </div>
                </div>
            </div>
        )
    }

export default MyGurus