import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    error: null | string;
}

const Error: React.FC<Props> = ({ error }: Props) => {
    const navigate = useNavigate();
    
    const navigateToHome = () => {
        return navigate("/");
    }
    return (
        <>
        <div className="flex justify-center items-center min-h-screen bg-[url('/la-liga-bg.jpg')] bg-cover bg-center px-4">
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
        </>
    );
}

export default Error;