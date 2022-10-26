# OnlyPicks

- Sal Hernandez 
- Robert Nacario
- Will Cordova
- Armen Ohanian

OnlyPicks - a place where sports cappers(Gurus) can post their daily/weekly sports picks! subscribe to your favorite capper(Guru)!

## Design

- [ ]
- [APIs](docs/api-design.md)
- [GHI](docs/ghi.md)
- [ ] 

## Who is OnlyPicks for?

We are going after the sports gambling community. As more states legalize online sports gambling more people are looking for resources for making bets! 


## What does OnlyPicks do? 

- Sports bettors can subscribe to their favorite sports capper(Guru)
  - Giving them access to their cappers daily/weekly sports picks!
- 

## Start application
Steps to start app locally using **Docker**

1. Fork then Clone repo from GitLab 
2.  CD into project directory
3.  (Using Docker) Make sure Docker is open
4.  Run `docker volume create guru_data`
5.  Run `docker compose build`
6.  Run `docker compose up`
7.  Open http://localhost:3000/ in browser
8.  You can now use OnlyPicks to view upcoming odds for NFL/NBA
9.  You can create Gurus and Users