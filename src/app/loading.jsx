import React from 'react';

const LoadingPage = () => {
    return (
        <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex items-center justify-center">
            <div className="text-center">
                {/* Logo/Icon */}
                <div className="text-6xl mb-4 animate-bounce">📰</div>
                
                {/* Loading Spinner */}
                <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
                
                {/* Text */}
                <p className="mt-4 text-gray-600 font-medium">Loading news...</p>
            </div>
        </div>
    );
};

export default LoadingPage;