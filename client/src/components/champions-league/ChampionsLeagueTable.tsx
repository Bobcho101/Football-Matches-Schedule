import { useFetchChampionsLeagueMatches } from "../../api/ChampionsLeagueApi";
import React from "react";

export default function ChampionsLeagueTable() {
    const { data } = useFetchChampionsLeagueMatches(); 

    console.log(data);
    
    return (
       <>
            <h1>hi</h1>
       </>     
    );
}