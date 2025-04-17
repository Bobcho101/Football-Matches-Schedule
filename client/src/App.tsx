import './App.css'
import React from 'react'
import ChampionsLeagueTable from './components/champions-league/ChampionsLeagueTable'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import PremierLeagueTable from './components/premier-league/PremierLeagueTable'
import LaLigaTable from './components/la-liga/LaLiga'
import Ligue1Table from './components/ligue-1/Ligue-1'
import NotFound from './components/not-found/NotFound'

const App: React.FC = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/league/champions-league' element={<ChampionsLeagueTable />} />
            <Route path='/league/premier-league' element={<PremierLeagueTable />} />
            <Route path='/league/la-liga' element={ <LaLigaTable />} />
            <Route path='/league/ligue-1' element={<Ligue1Table />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        </>
    )
}

export default App
