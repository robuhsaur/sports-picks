import React from "react";
import { Link } from "react-router-dom";

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
                <h1>Available Sports</h1>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Grid container spacing={2} columns={16}>
                    {this.state.sports.map((sport) => {
                        if (sport.title === 'NFL' || sport.title === 'NBA') {
                            return (
                                <ul key={sport.key}>
                                    <li><Link to={`/${sport.title}`}>{sport.title}</Link> - {sport.description} </li>
                                </ul>
                )
                        }
                    })}
                </Grid>
            </div>
        );
    }
}

export default SportsList;














