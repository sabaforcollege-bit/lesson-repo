import { Link } from 'react-router-dom';
import logo from '../assets/Redleaflanding.png';

export function Navbar() {
    return (
        <header className="w-full bg-[#E50914] text-white px-6 md:px-12 py-3 flex justify-between items-center shadow-lg border-b-2 border-black">
            <Link to="/" className="flex items-center">
                <img
                    src={logo}
                    alt="RedLeaf Lending Logo"
                    className="h-10 md:h-12 w-auto object-contain bg-white p-1 rounded transition-transform hover:scale-105"
                />
            </Link>

            <nav className="flex items-center gap-6 text-sm font-semibold tracking-wide">
                <Link
                    to="/"
                    className="hover:text-black transition-colors"
                >
                    მთავარი
                </Link>
                <Link
                    to="/card"
                    className="hover:text-black transition-colors"
                >
                    ბარათი
                </Link>
                <Link
                    to="/about"
                    className="hover:text-black transition-colors"
                >
                    ჩვენ შესახებ
                </Link>
            </nav>
        </header>
    );
}