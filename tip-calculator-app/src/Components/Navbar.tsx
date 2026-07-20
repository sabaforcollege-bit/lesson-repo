import { NavLink, Link } from 'react-router-dom';
import logoImg from '../assets/Tip_Calculator_Logo and name.png';

export const Navbar = () => {
    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${isActive
            ? 'bg-slate-800 text-white shadow-sm'
            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
        }`;

    return (
        <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
            <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <img
                        src={logoImg}
                        alt="Splitter Logo"
                        className="h-35 w-35 object-contain"
                    />
                </Link>

                <div className="flex gap-2">
                    <NavLink to="/" className={navLinkClasses}>
                        მთავარი
                    </NavLink>
                    <NavLink to="/about" className={navLinkClasses}>
                        ჩვენს შესახებ
                    </NavLink>
                    <NavLink to="/calculator" className={navLinkClasses}>
                        კალკულატორი
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};