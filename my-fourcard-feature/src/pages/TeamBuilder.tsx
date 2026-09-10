import { Link } from 'react-router-dom';

export default function TeamBuilder() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 border-b-4 border-red-400 pb-2">
                გუნდის ფორმირების გვერდი
            </h1>
            <p className="text-gray-600 max-w-md mb-8">
                სკანირებს ჩვენს ნიჭიერების ქსელს თქვენი პროექტისთვის ოპტიმალური გუნდის შესაქმნელად.
            </p>
            <Link
                to="/"
                className="px-6 py-2.5 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-red-600 transition"
            >
                ← მთავარ გვერდზე დაბრუნება
            </Link>
        </div>
    );
}