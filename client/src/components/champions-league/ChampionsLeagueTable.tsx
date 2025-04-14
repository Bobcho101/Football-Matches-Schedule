import { useFetchChampionsLeagueMatches } from "../../api/ChampionsLeagueApi";
import React from "react";

const ChampionsLeagueTable: React.FC = () => {
    const { data: matches } = useFetchChampionsLeagueMatches(); 

    console.log(matches);
    
    return (
        <div className="p-6 bg-[url('/CL-bg.jpg')] bg-cover bg-center min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-white text-center">Upcoming Matches</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="text-center text-xl font-semibold text-gray-700 mb-2">
                    Team A <span className="text-sm text-gray-500">vs</span> Team B
                </div>
                <div className="text-center text-sm text-gray-500">Fri, 12 Apr 2025</div>
                <div className="text-center text-base font-medium text-gray-600">18:30</div>
            </div>

                <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                    <div className="text-center text-xl font-semibold text-gray-700 mb-2">
                        Team C <span className="text-sm text-gray-500">vs</span> Team D
                    </div>
                    <div className="text-center text-sm text-gray-500">Sat, 13 Apr 2025</div>
                    <div className="text-center text-base font-medium text-gray-600">20:00</div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                    <div className="text-center text-xl font-semibold text-gray-700 mb-2">
                        Team E <span className="text-sm text-gray-500">vs</span> Team F
                    </div>
                    <div className="text-center text-sm text-gray-500">Sun, 14 Apr 2025</div>
                    <div className="text-center text-base font-medium text-gray-600">16:00</div>
                </div>
            </div>
        </div>
      );
};

export default ChampionsLeagueTable;