import './App.css'
import React from 'react'
import ChampionsLeagueTable from './components/champions-league/ChampionsLeagueTable'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'

function App() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/league/champions-league' element={<ChampionsLeagueTable />} />
        </Routes>
        </>
    )
}

export default App
