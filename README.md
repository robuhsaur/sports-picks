# SportsPicks

- Robert Nacario
- Sal Hernandez 
- Will Cordova


SportsPicks - a place where sports cappers(Gurus) can post their daily/weekly sports picks! 

## Design

- [APIs](docs/api-design.md)
- [GHI](docs/ghi.md)

## Who is SportsPicks for?

We are going after the sports gambling community. As more states legalize online sports gambling more people are looking for resources for making bets! 


## What does SportsPicks do? 

- Sports bettors can visit SportsPicks to see their favorite sports capper(Guru) share their picks for the upcoming games!
- Users can also see odds from popular bookmakers! 
- Can sign up as a Guru to post their picks to the public
  - a resource for users who sports bet.  
  

## Start application
Steps to start app locally using **Docker**

1. Fork then Clone repo from GitLab 
2.  CD into project directory
3.  (Using Docker) Make sure Docker is open
4.  Run `docker volume create guru_data`
5.  Run `docker compose build`
6.  Run `docker compose up`
7.  Open http://localhost:3000/ in browser
8.  You can now use SportsPicks to view upcoming odds for NFL/NBA
9.  You can create Gurus and Users
