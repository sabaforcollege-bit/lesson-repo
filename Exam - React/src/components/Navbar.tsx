import { Link } from "react-router-dom";
import logo from "../assets/E-Shop logo.png";

interface NavbarProps {
    favoritesCount: number;
}

export function Navbar({ favoritesCount }: NavbarProps) {
    return (
        <nav className="bg-slate-900 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 group">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                    />
                    <span className="text-xl font-bold tracking-wide group-hover:text-blue-400 transition-colors">
                        ელექტრონული მაღაზია
                    </span>
                </Link>

                <div className="flex items-center gap-6">
                    <Link to="/" className="hover:text-blue-400 transition font-medium">
                        მთავარი
                    </Link>
                    <Link to="/products" className="hover:text-blue-400 transition font-medium">
                        პროდუქტები
                    </Link>
                    <Link to="/about" className="hover:text-blue-400 transition font-medium">
                        ჩვენ შესახებ
                    </Link>

                    <Link
                        to="/favorites"
                        className="bg-blue-600 hover:bg-blue-700 transition text-xs px-3 py-1.5 rounded-full font-semibold shadow-sm flex items-center gap-1"
                    >
                        ფავორიტები: <span>{favoritesCount}</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}