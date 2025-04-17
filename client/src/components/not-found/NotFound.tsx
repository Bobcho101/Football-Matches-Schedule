import React from "react";

const NotFound: React.FC = () => {
    
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
            <h1 className="text-4xl font-bold text-white mb-8">Page Not Found</h1>
            <p className="text-lg text-gray-400 mb-8">The page you are looking for doesn't exist or has been moved.</p>
            <button 
                className="px-6 py-3 text-lg cursor-pointer bg-blue-300 text-gray-800 rounded-lg shadow-md hover:bg-blue-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
                Go to Home
            </button>
        </div>
    );
}

export default NotFound;