import { Link } from 'react-router-dom';

export function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-9xl font-extrabold text-blue-500 tracking-widest">404</h1>
            <div className="bg-slate-900 text-white px-3 py-1 text-sm rounded rotate-12 absolute mb-20">
                გვერდი ვერ მოიძებნა
            </div>
            <p className="text-gray-600 text-lg mt-8 mb-6">
                სამწუხაროდ, გვერდი, რომელსაც ეძებთ, არ არსებობს ან გადაადგილებულია.
            </p>
            <Link
                to="/"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md"
            >
                მთავარ გვერდზე დაბრუნება
            </Link>
        </div>
    );
}