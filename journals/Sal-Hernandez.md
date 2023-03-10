## project idea - Week 0 ##

- we started our plan - sport-picks
have an app that gives odds to sports/leagues. have guru(s) that can sell picks to public
people will see odds from multiple bookmakers. this is not a gambling app.. it is more of a reference for making sports bets. so the goal would be to charge people for the picks.
This idea came up from personal experience with sports betting.


#### **project idea - revised** ### 

- we are switching to a subscription model. where we will not be providing gurus instead we are providing a platform for gurus to sign-up up and sell picks to their following. new name OnlyPicks !! 
we have designed our wire-frame.

---
## Week 1 ### 
- I forked the repo and created a group in gitlab for our team. then created a issue board with the help of the team. finished last touches to the wireframe.

**10/4**
- team created DBs. I worked with  Armen to implement the pgAdmin. got that resolved and added.
started working on FastAPI and did more research on the 3rd party API to pull odds. spoke with SEIR Matt came to conclusion that React might be easier to pull 3rd party API. started looking into pulling with react

**10/5**
- worked on DBs making sure we are able to connect. did encounter issues with docker took a bit to figure out. had to delete project and re-clone. 

**10/6**
- started working on 3rd party api. signed up to get api key. started reading docs on how to use api. also reading how to use react to make 3rd party api call. have to choose wether to use function or class based.

---

## Week 2 ### 

**10/10**
- working on getting the 3rd party api to work with react. researched a way to hide API Key. getting title to display but getting error on the get request. Was finally able to get 3rd party api working. First time using react/front end to make a request to a 3rd party api. Data is coming in and I am able to display it. next I will work on making the titles a clickable link that routes to the league/sport selected. ran into some issues while trying to request the data. it was displaying undefined but my api dashboard was indicating a call was made. I checked the network tab and saw a 200 response which led me to review my code and what I was doing once the data was being sent back. I fixed the issue by changing the state I had it set to. 


**10/11**
- Today finished up the sports list to only display the sports we need. ran into some trouble with getting only the leagues/sports I wanted to show. Eventually decided to go with a if statement in the JSX. that works for now. I will come back to see if better way to sort. Now I need to make sure the title is a link that will direct to the page with all the games available.  started working on the next page. reading more docs on the api to now display the specific sport. 

**10/12**
- Continuing my work from yesterday. ran into some issues pulling the games needed. working on resolving.

**10/13**
- working on NFL/NBA games page today. got a bug that was giving me issue on loading the games. was able to fix and get it working. finished the NFL page. 

**10/14**
- kept working on same thing. making sure I am getting correct data. Got stuck on how to link to another page. such as if user was to click on the sport they wanted how would I redirect. tried a few different methods, the one that worked for me was Link. I was able to link to the sport that is selected.

---

## Week 3 ##

**10/17**
- got links to work on sports page. now working on displaying all the odds for the specific team. still working. running into issue of how to grab the specific game to display. not sure how I can do it. My plan is to pull it by game id. 

**10/18**
- Still working on getting from game list to specific game. still sticking with pulling it with id. looked at react docs to try and figure out a way. spoke with Will bc we both were working on a similar feature of pulling specific info. We reached out to Matt(SEIR) for guidance on our issue. With the help from Will and Matt, we were able to figure out a way for me to pull the id I need. After pulling the id using useParams() I was able to complete the odds page.  

**10/19**
- today I planned to work on the design of the app since the functionality is complete. I got with group, asked questions on design that we had originally planned, got feedback. got to work reading docs on Material UI. was a bit challenging but playing around with it I was able to come to a design. I did run into a few errors, one being the picture was not displaying and how to get the correct picture to display. I was able to come up with a solution to check what sport it was and depending on the sport the logo is displayed.

**10/20**
- We were told to not worry about design. so switched gears to making sure everything is ready to go for deployment. all functionality is ready to go except for one part. Going to start working on unit test for app. 

---

## Week 4 ##

**10/24**
- working on unit test and going to start working on deployment. got an error with api key. not working properly. trouble shooting issue. tried adding key to heroku, gitlab, docker. was still getting issues. 

**10/25**
- continued work on api key displaying. had some lint issues that I had to clean up for pipeline to pass build. worked on getting deployed w/ Robbie, walked thru the CI/CD cook book. was still running into issues with api key. Worked with Matt(SEIR) was able to get api key working to display data locally again. then figured out how to get api key working in production. going to finish test.

**10/26**
- finishing last things on app. finished unit test.