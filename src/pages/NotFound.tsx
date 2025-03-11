import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
return (
    <div className="min-h-screen flex items-center justify-center px-4">
    <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
        </p>
        <Link 
        to="/" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
        >
        Return to Homepage
        </Link>
    </div>
    </div>
);
};

export default NotFound;

