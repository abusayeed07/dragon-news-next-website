import React from 'react';

const loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="text-center">
                {/* Spinner */}
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                
                {/* Loading Text */}
                <h2 className="text-xl font-semibold text-base-content mb-2">
                    Loading...
                </h2>
                
                {/* Subtitle */}
                <p className="text-sm text-base-content/60">
                    Please wait while we redirect you
                </p>
            </div>
        </div>
    );
};

export default loading;