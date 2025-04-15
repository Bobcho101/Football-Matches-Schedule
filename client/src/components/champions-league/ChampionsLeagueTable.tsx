import { useNavigate } from "react-router-dom";
import { useFetchMatches } from "../../api/matchesApi";
import React from "react";


const ChampionsLeagueTable: React.FC = () => {
    const { matches, loading, error } = useFetchMatches("cl");
    const navigate = useNavigate();

    const navigateToHome = () => {
        return navigate("/");
    }

    const navigateToLeague = (name: string) => {
        return navigate(`/league/${name}`);
    }

    return (
        <>
        {loading && (
            <div className="flex justify-center items-center min-h-screen bg-[url('/CL-bg.jpg')] bg-cover bg-center">
                <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
        )}
        { error && (
            <div className="flex justify-center items-center min-h-screen bg-[url('/CL-bg.jpg')] bg-cover bg-center px-4">
                <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-center max-w-md w-full">
                    <h2 className="text-3xl font-extrabold text-red-600 mb-4">Oops! Something went wrong</h2>
                    <p className="text-gray-800 text-base mb-6">{error || "An unexpected error occurred. Please try again later."}</p>
                    <button
                    onClick={() => navigateToHome()}
                    className="px-6 py-2 bg-gradient-to-r cursor-pointer from-gray-400 to-gray-600 text-white font-semibold rounded-lg hover:from-gray-500 hover:to-gray-700 transition duration-300"
                    >
                    Go back to the homepage
                    </button>
                </div>
            </div>
        )}
        <div className="p-6 bg-[url('/CL-bg.jpg')] bg-cover bg-center min-h-screen">
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
            <h2 className="text-3xl font-bold mb-6 text-white text-center">Upcoming Matches</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {!error && matches.map((match) => { 
                if(match.homeTeam.shortName === null || match.awayTeam.shortName === null) return;

                return(
                    <div key={match.id} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
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

export default ChampionsLeagueTable;