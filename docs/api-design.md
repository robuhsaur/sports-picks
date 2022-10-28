# APIs

## Guru Accounts

- Method: `GET`, `POST`,
- Path: `/signup-guru`, `/login-guru`

Input:

```json
{
  "username": string,
  "password": string,
  "description": string,
  "price": int,
 
  
}
```


# 3rd party API 
## Sports List 
* Path: `/sportslist`
* Method: `GET`



* Response: a list of upcoming games
* Response shape:
    ```json
    {
      "upcoming games": [
        {
          "sports_key": "string",
          "sport_title": "string",
          "commence_time": "2020-01-02T23:10:00Z",
          "completed": true,
          "home_team": "string",
          "away_team": "string",
          "scores": number "string"

          
        }
      ]
    }
    ```

## Teams/Odds page  

* Path: `/odds`
* Method: `GET`


* Response: odds to a game 
* Response shape:
    ```json
    {
      "odds": [
        {
          "id": "e912304de2b2ce35b473ce2ecd3d1502",
          "sports_key": "americanfootball_nfl",
          "sport_title": "NFL",
          "commence_time": "2020-01-02T23:10:00Z",
          "home_team": "Houston Texans",
          "away_team": "Kansas City Chiefs",
          "bookmakers": 1 item

          
        }
      ]
    }
    ```