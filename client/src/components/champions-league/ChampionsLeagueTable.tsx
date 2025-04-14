import { useFetchChampionsLeagueMatches } from "../../api/ChampionsLeagueApi";
import React from "react";

const ChampionsLeagueTable: React.FC = () => {
    const { data: matches } = useFetchChampionsLeagueMatches(); 

    console.log(matches);
    
    return (
       <>
            <h1>hi</h1>
       </>     
    );
};

export default ChampionsLeagueTable;