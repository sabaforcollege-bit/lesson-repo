import { Link } from 'react-router-dom';
import Logo from '../assets/inspectocat.png'

export function Navbar() {
    return (
        <nav className="bg-slate-900 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center gap-5 group cursor-pointer">
                    <img
                        src={Logo}
                        alt="GitHub Logo"
                        className="w-8 h-8 object-contain transition-transform group-hover:scale-105"
                    />
                    <h1 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                        Inspector Git Users
                    </h1>
                </Link>
                <div className="flex gap-6">
                    <Link to="/" className="hover:text-blue-400 transition">
                        მთავარი
                    </Link>
                    <Link to="/search" className="hover:text-blue-400 transition">
                        მომხმარებლის ძიება
                    </Link>
                    <Link to="/about" className="hover:text-blue-400 transition">
                        ჩვენს შესახებ
                    </Link>
                </div>
            </div>
        </nav>
    );
}