import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-7xl font-extrabold text-blue-600 mb-2">404</h1>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
                გვერდი ვერ მოიძებნა
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-md">
                სამწუხაროდ, გვერდი, რომელსაც ეძებთ, არ არსებობს ან გადაადგილებულია.
            </p>
            <Link
                to="/"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
                მთავარ გვერდზე დაბრუნება
            </Link>
        </div>
    );
}