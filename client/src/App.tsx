import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import NotFound from './components/not-found/NotFound'
import LeagueTable from './components/league-table/LeagueTable'


const App: React.FC = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/league/champions-league' element={<LeagueTable name='Champions League' backgroundImg='CL-bg' backgroundCover={true} leagueId='CL' />} />
            <Route path='/league/premier-league' element={<LeagueTable name='Premier League' backgroundImg='premier-bg' backgroundCover={false} leagueId='PL' />} />
            <Route path='/league/la-liga' element={<LeagueTable name='La Liga' backgroundImg='la-liga-bg' backgroundCover={false} leagueId='PD' />} />
            <Route path='/league/ligue-1' element={<LeagueTable name='Ligue 1' backgroundImg='ligue-1-bg' backgroundCover={false} leagueId='FL1' />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        </>
    )
}

export default App
