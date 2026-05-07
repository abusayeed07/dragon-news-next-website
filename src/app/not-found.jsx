"use client";

import React from 'react';

const NotFoundPage = () => {
    const goBack = () => {
        window.history.back();
    };

    const goHome = () => {
        window.location.href = '/';
    };

    const goToNews = () => {
        window.location.href = '/news';
    };

    const goToContact = () => {
        window.location.href = '/contact';
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4">
            <div className="text-center">
                {/* Animated 404 Number */}
                <div className="relative">
                    <h1 className="text-8xl md:text-9xl font-bold text-white mb-4 animate-bounce">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    </div>
                </div>
                
                {/* Error Message */}
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                    Page Not Found
                </h2>
                
                <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                        onClick={goHome}
                        className="px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                        🏠 Go Back Home
                    </button>
                    
                    {/* <button 
                        onClick={goBack}
                        className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-600 transform hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                        ← Go Back
                    </button> */}
                </div>
                
                {/* Decorative Elements */}
                <div className="mt-12 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-ping delay-100"></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-ping delay-200"></div>
                </div>
                
                {/* Helpful Links */}
                <div className="mt-8 text-gray-400 text-sm">
                    <p>Need help? Check out these pages:</p>
                    <div className="flex flex-wrap gap-4 justify-center mt-2">
                        <button 
                            onClick={goHome}
                            className="hover:text-purple-400 transition-colors cursor-pointer bg-transparent border-none"
                        >
                            Home
                        </button>
                        <button 
                            onClick={goToNews}
                            className="hover:text-purple-400 transition-colors cursor-pointer bg-transparent border-none"
                        >
                            Latest News
                        </button>
                        <button 
                            onClick={goToContact}
                            className="hover:text-purple-400 transition-colors cursor-pointer bg-transparent border-none"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;