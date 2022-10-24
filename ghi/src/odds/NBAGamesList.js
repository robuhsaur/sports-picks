import React from "react";
import { useState, useEffect } from "react";
import { useNavigate,  } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';


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
            <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Upcoming NBA Games</h1>
            <Grid container spacing={2} columns={16}>

                {NBAgames.map((game) => (
                    <Grid key={game.id} xs={8}>
                        <Card sx={{ maxWidth: 400 }}>
                            <CardActionArea onClick={() => navigate(`/odds/${game.id}/${game.sport_key}`)}>
                                <CardContent>
                                    <Typography variant="h7" gutterBottom>{game.away_team}(A) vs {game.home_team}(H)</Typography>
                                    <Typography gutterBottom variant="body1">{new Date(game.commence_time).toLocaleDateString(undefined, { weekday: "long", month: "short", day:"numeric" })}</Typography>
                                    <Typography gutterBottom variant="body2">{new Date(game.commence_time).toLocaleTimeString('en-US', { timeZone: "America/Los_Angeles", hour: "2-digit", minute: "2-digit" })}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}

            </Grid>
        </div>
    );
}

export default NBAGamesList;