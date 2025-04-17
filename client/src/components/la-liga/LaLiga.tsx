import { useFetchMatches } from "../../api/matchesApi";
import React from "react";
import { setDocumentTitle } from "../../utils/document";
import Error from "../error/error";
import LoadingSpinner from "../loading/LoadingSpinner";
import Navigation from "../navigation/Navigation";

const LaLigaTable: React.FC = () => {
    setDocumentTitle("Premier League");
    const { matches, loading, error } = useFetchMatches("PD");

    return (
        <>
        { loading && <LoadingSpinner />}
        { error && <Error error={error} />}
        <div className="p-6 bg-[url('/la-liga-bg.jpg')] bg-center min-h-screen">
            <Navigation />
            <h2 className="text-4xl font-extrabold mb-6 text-white text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">Upcoming Matches</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            { !error && matches.map((match) => { 
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

export default LaLigaTable;