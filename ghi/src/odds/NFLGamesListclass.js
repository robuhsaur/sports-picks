import React from "react";
import { Navigate } from 'react-router-dom'

class NFLGameslist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
    }

    async componentDidMount() {
        const url = 'https://odds.p.rapidapi.com/v4/sports/americanfootball_nfl/odds?regions=us&oddsFormat=decimal&dateFormat=iso'
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
            this.setState({ games: data });
            // console.log(data)
            
        }
    }



    render() {
        
        return (
            <div>
                <h1>Upcoming NFL Games</h1>
                <ul>
                    {this.state.games.map((game) => {
                            return (
                                <ul key={game.id}>
                                    <li>{game.away_team}(A) vs {game.home_team}(H)
                                    </li>
                                    <button onClick={()=> navigate(`/gurus/${guru.id}`)} type="button" 
                                            className="btn btn-info btn-sm btn-block">Subscribe
                                            </button>
                                </ul>
                            )
                        
                    })}
                </ul>
            </div>
        );
    }
}

export default NFLGameslist;