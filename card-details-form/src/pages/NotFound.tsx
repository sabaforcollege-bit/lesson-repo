import { Link } from 'react-router-dom';

export function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-4 bg-slate-100 p-4">
            <h1 className="text-6xl font-extrabold text-[#21092F]">404</h1>
            <p className="text-xl text-gray-600">გვერდი რომელსაც ეძებთ ვერ მოიძებნა</p>
            <Link
                to="/"
                className="mt-4 bg-[#21092F] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
                მთავარ გვერდზე დაბრუნება
            </Link>
        </div>
    );
}