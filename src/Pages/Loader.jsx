import { useState, useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { FaRocket } from 'react-icons/fa';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a 3-second delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-blue-200 via-teal-100 to-green-200 text-gray-800"
        >
            {isLoading ? (
                <div className="flex flex-col items-center text-center px-4">
                    <InfinitySpin
                        visible={true}
                        width="100"
                        color="#4b5563" // Dark Gray Spinner
                        ariaLabel="infinity-spin-loading"
                    />
                    <FaRocket className="mt-4 text-3xl text-gray-700 animate-bounce" /> {/* Bouncing Rocket Icon */}
                    <p className="mt-4 text-lg md:text-xl font-semibold animate-pulse">
                        Welcome to My Portfolio
                    </p>
                    <p className="text-sm mt-2 md:mt-4 text-gray-600">
                        Loading awesome content just for you...
                    </p>
                </div>
            ) : (
                <h1 className="text-3xl md:text-5xl font-bold text-center animate-fade-in">
                    Welcome to My Portfolio!
                </h1>
            )}
        </div>
    );
};

export default App;
