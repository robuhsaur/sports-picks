import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';


function NFLGamesList() {
    const navigate = useNavigate();
    const [games, setSports] = useState([]);


    useEffect(() => {
        async function getData() {
            let url = 'https://odds.p.rapidapi.com/v4/sports/americanfootball_nfl/odds?regions=us&oddsFormat=decimal&dateFormat=iso';
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
                setSports(data);
                console.log("got sports data!");
            } else {
                console.log("ERRRROOORRRR")
            }
        }
        getData();
    }, []);

    return (
        <div>
            <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Upcoming NFL Games</h1>
            <Grid container spacing={2} columns={16}>

                {games.map((game) => (
                    <Grid xs={8}>
                        <Card sx={{ maxWidth: 400 }}>
                            <CardActionArea onClick={() => navigate(`/odds/${game.id}/${game.sport_key}`)}>
                                <CardContent key={game.id} >
                                    <Typography gutterBottom variant="h5">{game.away_team}(A) vs {game.home_team}(H)</Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}

            </Grid>
        </div>
    );
}

export default NFLGamesList;