# Football Matches Schedule
# THE APP DOES NOT WORK BECAUSE OF THE DAMN CORS ERROR YOU CAN SEE THE CODE (I HATE THIS API)

## Description
- **This is a web app that shows football matches schedule. There are 5 leagues: Champions League, Premier League, La Liga, Bundesliga and Ligue 1.**

## Notes
- **The main point of this project is learn to work with bigger APIs**
- **The API requests are limited (*around 10 requests per minute*)**
- **There is a problem with the API and sometimes it does not fetch anything and the client says that there are no matches available**
- **I didn't do the API requests directly to the main API so because CORS error was thrown (*for no reason*) so i used a server that fetches the data and send it to the client**

## Deployed Version
- [Football Matches Schedule](https://football-matches-schedule.herokuapp.com/)

## Functionality
- **Home page with the routes for all leagues**
- **Page for every league (*the page is dynamically generated they are not fixed*)**
- **You can see the schedule of the matches and their date and hour**

## How To Run The Project Locally On Your Machine
1. **Run the server**
- **Open integrated terminal on the server folder or run the following command**

```bash
    cd server
```

- **Install dependencies**

```bash
    npm install
```
- **Run the server**

```bash
    node server
```

2. **Run the client**
- **Open integrated terminal on the client folder or run the following command**

```bash
    cd client
```

- **Install dependencies**

```bash
    npm install
```
- **Run the app**

```bash
    npm run dev
```