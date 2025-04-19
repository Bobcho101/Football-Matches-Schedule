import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import NotFound from './components/not-found/NotFound'
import LeagueTable from './components/league-table/LeagueTable'
// import ChampionsLeagueTable from './components/champions-league/ChampionsLeagueTable'
// import PremierLeagueTable from './components/premier-league/PremierLeagueTable'
// import LaLigaTable from './components/la-liga/LaLiga'
// import Ligue1Table from './components/ligue-1/Ligue-1'


const App: React.FC = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/league/champions-league' element={<LeagueTable name='Champions League' backgroundImg='CL-bg' backgroundCover={true} leagueId='CL' />} />
            <Route path='/league/premier-league' element={<LeagueTable name='Premier League' backgroundImg='premier-bg' backgroundCover={false} leagueId='PL' />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        </>
    )
}

export default App
