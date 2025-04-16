import './App.css'
import React from 'react'
import ChampionsLeagueTable from './components/champions-league/ChampionsLeagueTable'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import PremierLeagueTable from './components/premier-league/PremierLeagueTable'
import LaLigaTable from './components/la-liga/LaLiga'

function App() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/league/champions-league' element={<ChampionsLeagueTable />} />
            <Route path='/league/premier-league' element={<PremierLeagueTable />} />
            <Route path='/league/la-liga' element={ <LaLigaTable />} />
        </Routes>
        </>
    )
}

export default App
