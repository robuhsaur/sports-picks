import React from "react";
import { useState, useEffect } from "react";
import { useNavigate,  } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function NBAGamesList() {
    const navigate = useNavigate();
    const [NBAgames, setNBA] = useState([]);
    

    useEffect(() => {
        async function getData() {
            let url = 'https://odds.p.rapidapi.com/v4/sports/basketball_nba/odds?regions=us&oddsFormat=decimal&dateFormat=iso';
            const fetchConfig = {
                method: "GET",
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_ODDS_API_KEY,
                    'X-RapidAPI-Host': 'odds.p.rapidapi.com'
                }
            }
            let response = await fetch(url, fetchConfig);
            
            if (response.ok) {
                let NBAdata = await response.json();
                setNBA(NBAdata);
                console.log("got sports data!");
            } else {
                console.log("ERRRROOORRRR")
            }
        }
        getData();
    }, []);

    return (
        <div>
            <h1>Upcoming NBA Games</h1>
            {NBAgames.map((game) => (
                <ul key={game.id}>
                    <li>{game.away_team}(A) vs {game.home_team}(H)</li>
                    <button onClick={() => navigate(`/odds/${game.id}/${game.sport_key}`)} type="button"
                        className="btn btn-info btn-sm btn-block">Go To Odds
                    </button>
                </ul>
            ))}
        </div>
    );
}

export default NBAGamesList;