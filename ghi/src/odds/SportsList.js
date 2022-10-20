import React from "react";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#10bbe2' : '#ffffff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


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
                <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Available Sports</h1>
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                    {this.state.sports.map((sport) => {
                        if (sport.title === 'NFL' || sport.title === 'NBA') {
                            return (
                                <Grid xs={8} key={sport.key}>
                                    <Item><Link to={`/${sport.title}`}>{sport.title}</Link> - {sport.description} </Item>
                                </Grid>
                )
                        }
                    })}
                </Grid>
                </Box>
            </div>
        );
    }
}

export default SportsList;














