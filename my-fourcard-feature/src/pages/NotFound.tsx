import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-6xl font-extrabold text-gray-800 mb-4">პრობლემა</h1>
            <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-6">გვერდი ვერ მოიძებნა</p>
            <Link
                to="/"
                className="px-6 py-2.5 bg-gray-800 text-white font-medium rounded-lg shadow hover:bg-gray-900 transition"
            >
                მთავარ გვერდზე დაბრუნება
            </Link>
        </div>
    );
}