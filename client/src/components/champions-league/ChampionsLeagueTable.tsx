import { useFetchChampionsLeagueMatches } from "../../api/ChampionsLeagueApi";
import React from "react";


const ChampionsLeagueTable: React.FC = () => {
    const { matches } = useFetchChampionsLeagueMatches(); 

    console.log(matches);
    
    return (
        <div className="p-6 bg-[url('/CL-bg.jpg')] bg-cover bg-center min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-white text-center">Upcoming Matches</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.map((match) => { 
            if(match.homeTeam.shortName === null || match.awayTeam.shortName === null) return;
            return(
            <>
                <div key={match.id} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                    <div className="text-center text-xl font-semibold text-gray-700 mb-2">
                       {match.homeTeam.shortName} <span className="text-sm text-gray-500">vs</span> {match.awayTeam.name}
                    </div>
                    <div className="text-center text-sm text-gray-500">Fri, 12 Apr 2025</div>
                    <div className="text-center text-base font-medium text-gray-600">18:30</div>
                </div>
            </>
            )})}
            </div>
        </div>
      );
};

export default ChampionsLeagueTable;