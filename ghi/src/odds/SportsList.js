import React from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';



class SportsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sports: []
        };
    }

    async componentDidMount() {
        const url = 'https://odds.p.rapidapi.com/v4/sports'
        const fetchConfig = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_ODDS_API_KEY,
                'X-RapidAPI-Host': 'odds.p.rapidapi.com'
            }
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const data = await response.json();
            this.setState({ sports: data });

        }
    }

    render() {

        return (
            <div>
                <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Available Sports</h1>
                <Grid container spacing={2} columns={16}>

                    {this.state.sports.map((sport) => {
                        if (sport.title === 'NFL' || sport.title === 'NBA') {
                            return (
                                <Grid xs={8}>
                                    <Card sx={{ maxWidth: 345 }}><Link to={`/${sport.title}`}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="225"
                                                image={sport.title === 'NBA' ? 'http://lofrev.net/wp-content/photos/2016/06/NBA-Logo-2-300x225.jpg' : 'https://1000logos.net/wp-content/uploads/2017/05/NFL-logo.png'}
                                                alt="sport"
                                            />
                                            <CardContent key={sport.key}>

                                                <Typography>{sport.title} - {sport.description} </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Link>
                                    </Card>
                                </Grid>
                            )
                        }
                    })}
                </Grid>

            </div>
        );
    }
}

export default SportsList;