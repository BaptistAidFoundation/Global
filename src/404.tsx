import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
    <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
        <p className="text-2xl font-semibold text-gray-600 mt-4 mb-8">
        Oops! Page not found
        </p>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors inline-block">
        Back to Home
        </Link>
    </div>
    </div>
);
};

export default NotFound;

