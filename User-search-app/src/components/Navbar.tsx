import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Logo from "../assets/github-inspectocat.png";

export function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="flex items-center justify-between p-4 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-xl mb-6 shadow-md transition-colors duration-300">
            <Link
                to="/"
                className="flex items-center gap-2.5 text-xl font-bold hover:text-blue-500 transition-colors"
            >
                <img
                    src={Logo}
                    alt="github inspector cat"
                    className="w-15 h-15 object-contain rounded-md"
                />
                <span>
                    GitHub <span>User <span>Search</span></span>
                </span>
            </Link>

            <div className="flex items-center gap-6">
                <div className="flex gap-4 font-medium">
                    <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
                    <Link to="/searchUser" className="hover:text-blue-500 transition-colors">Search</Link>
                    <Link to="/aboutus" className="hover:text-blue-500 transition-colors">About Us</Link>
                </div>

                <button
                    onClick={toggleTheme}
                    className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold cursor-pointer"
                >
                    {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
                </button>
            </div>
        </nav>
    );
}