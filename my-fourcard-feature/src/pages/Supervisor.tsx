import { Link } from 'react-router-dom';

export default function Supervisor() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 border-b-4 border-cyan-400 pb-2">
                ზედამხედველის გვერდი
            </h1>
            <p className="text-gray-600 max-w-md mb-8">
                აკვირდება საქმიანობას პროექტის შემაფერხებელი ფაქტორების გამოსავლენად.
            </p>
            <Link
                to="/"
                className="px-6 py-2.5 bg-cyan-500 text-white font-medium rounded-lg shadow-md hover:bg-cyan-600 transition"
            >
                ← მთავარ გვერდზე დაბრუნება
            </Link>
        </div>
    );
}