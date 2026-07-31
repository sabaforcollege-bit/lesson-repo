import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="p-8 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-2xl shadow-md text-center space-y-4">
            <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
            <h2 className="text-2xl font-bold">გვერდი ვერ მოიძებნა!</h2>
            <p className="text-slate-600 dark:text-slate-300">
                მოთხოვნილი მისამართი არ არსებობს.
            </p>
            <div>
                <Link
                    to="/home"
                    className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
                >
                    მთავარ გვერდზე დაბრუნება
                </Link>
            </div>
        </div>
    );
}