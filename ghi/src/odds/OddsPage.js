import React from "react";
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'


function OddsPage() {
    const { gameId, sport } = useParams();
    

    const [gameInfo, setGame] = useState([]);
    useEffect(() => {
        async function getData() {
            let url = `https://odds.p.rapidapi.com/v4/sports/${sport}/odds?regions=us&oddsFormat=decimal&dateFormat=iso`;
            const fetchConfig = {
                method: "GET",
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_ODDS_API_KEY,
                    'X-RapidAPI-Host': 'odds.p.rapidapi.com'
                }
            }
            let response = await fetch(url, fetchConfig);

            if (response.ok) {
                let data = await response.json();
                setGame(data);
                console.log("game data");
            }
        }
        getData();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Home Team</th>
                        <th>BookMaker</th>
                        <th>Away Team</th>
                    </tr>
                </thead>
                <tbody>
                    {gameInfo.map((teams) => {
                        if (teams.id === gameId) {
                            return (
                                <tr key={teams.id}>
                                    <td>{teams.home_team}</td>
                                    <td>{teams.bookmakers[12].title}</td>
                                    <td>{teams.away_team}</td>                                    
                                </tr>

                            
                            )
                        } else {
                            return null;
                        }
                    })}
                </tbody>
            </table>

        </div>
    )
}


export default OddsPage;