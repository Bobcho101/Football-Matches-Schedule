import React from "react";

const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-800 bg-cover bg-center">
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}

export default LoadingSpinner;