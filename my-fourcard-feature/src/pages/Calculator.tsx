import { Link } from 'react-router-dom';

export default function Calculator() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 border-b-4 border-blue-500 pb-2">
                კალკულატორის გვერდი
            </h1>
            <p className="text-gray-600 max-w-md mb-8">
                იყენებს წარსული პროექტების მონაცემებს შესრულების ვადების უფრო ზუსტი შეფასებისთვის.
            </p>
            <Link
                to="/"
                className="px-6 py-2.5 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition"
            >
                ← მთავარ გვერდზე დაბრუნება
            </Link>
        </div>
    );
}