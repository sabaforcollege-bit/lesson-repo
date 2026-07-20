import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
    return (
        <div className="min-h-[calc(100vh-4rem)] bg-slate-100 flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-6xl font-extrabold text-slate-800 mb-4">Error 404</h1>
            <h2 className="text-2xl font-bold text-slate-700 mb-2">გვერდი ვერ მოიძებნა</h2>
            <p className="text-slate-500 mb-6">მისამართი, რომელზეც გადასვლასაც ცდილობთ, არ არსებობს.</p>
            <Link
                to="/"
                className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-colors duration-200"
            >
                მთავარ გვერდზე დაბრუნება
            </Link>
        </div>
    );
};