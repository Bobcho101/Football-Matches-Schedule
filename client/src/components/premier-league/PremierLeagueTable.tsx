import { useNavigate } from "react-router-dom";
import { useFetchMatches } from "../../api/matchesApi";
import React from "react";
import { setDocumentTitle } from "../../utils/document";
import Error from "../error/error";


const PremierLeagueTable: React.FC = () => {
    setDocumentTitle("Premier League");
    const { matches, loading, error } = useFetchMatches("pl");
    const navigate = useNavigate();

    const navigateToLeague = (name: string) => {
        return navigate(`/league/${name}`);
    }

    return (
        <>
        {loading && (
            <div className="flex justify-center items-center min-h-screen bg-[url('/premier-bg.jpg')] bg-cover bg-center">
                <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
        )}
        { error && <Error error={error} />}
        <div className="p-6 bg-[url('/premier-bg.jpg')] bg-center min-h-screen">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                <button onClick={() => navigateToLeague('champions-league')} className="px-6 py-3 text-lg cursor-pointer bg-blue-300 text-gray-800 rounded-lg shadow-md hover:bg-blue-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-200">
                    Champions League
                </button>
                <button onClick={() => navigateToLeague('premier-league')} className="px-6 py-3 text-lg cursor-pointer bg-yellow-300 text-gray-800 rounded-lg shadow-md hover:bg-yellow-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-200">
                    Premier League
                </button>
                <button onClick={() => navigateToLeague('la-liga')} className="px-6 py-3 text-lg cursor-pointer bg-red-300 text-gray-800 rounded-lg shadow-md hover:bg-red-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-200">
                    La Liga
                </button>
                <button onClick={() => navigateToLeague('ligue-1')} className="px-6 py-3 text-lg cursor-pointer bg-green-300 text-gray-800 rounded-lg shadow-md hover:bg-green-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-200">
                    Ligue 1
                </button>
            </div>
            <h2 className="text-4xl font-extrabold mb-6 text-white text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">Upcoming Matches</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {!error && matches.map((match) => { 
                if(match.homeTeam.shortName === null || match.awayTeam.shortName === null) return;

                return(
                    <div key={match.id} className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-2xl hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition duration-300 border border-white/30 ring-1 ring-black/10">
                        <div className="text-center text-xl font-semibold text-gray-700 mb-2">
                        {match.homeTeam.shortName} <span className="text-sm text-gray-500">vs</span> {match.awayTeam.shortName}
                        </div>
                        <div className="text-center text-sm text-gray-500">
                        { new Date(match.utcDate).
                        toISOString()
                        .split("T")[0]
                        .split("-")
                        .reverse()
                        .join("-")}</div>
                        <div className="text-center text-base font-medium text-gray-600">
                        {new Date(match.utcDate).toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                            timeZone: "Europe/Sofia" 
                        })}
                        </div>
                    </div>
                )})}
            </div>
        </div>
        </>
      );
};

export default PremierLeagueTable;