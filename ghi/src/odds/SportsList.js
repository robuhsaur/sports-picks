import React from "react";

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
            sport_key:"americanfootball_nfl",
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_ODDS_API_KEY,
                'X-RapidAPI-Host': 'odds.p.rapidapi.com'
            }
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const data = await response.json();
            this.setState(({sports: data}));
            console.log(data);
        }
    }
        
  render() {
    return (
      <div>
        <h1>SportsList</h1>
        <ul>
            {this.state.sports.map((sport) => {
                return (
                    <ul key={sport.sport_key}>
                        <li>{sport.title}</li>
                    </ul>
                )
            })}
        </ul>
      </div>
    );
  }
}

export default SportsList;