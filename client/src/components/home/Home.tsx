import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setDocumentTitle } from '../../utils/documentUtils';

const Home: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setDocumentTitle('Home');
    }, [])

    const navigateToLeague = (name: string) => {
        return navigate(`/league/${name}`);
    }

    return (
        <>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
            <h1 className="text-4xl font-bold text-white mb-8">Choose a Football Competition</h1>
            <div className="flex flex-col gap-6">
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
                <button onClick={() => navigateToLeague('bundesliga')} className="px-6 py-3 text-lg cursor-pointer bg-orange-300 text-gray-800 rounded-lg shadow-md hover:bg-orange-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-200">
                Bundesliga
                </button>
            </div>
        </div>
        </>  
    );
};


export default Home;