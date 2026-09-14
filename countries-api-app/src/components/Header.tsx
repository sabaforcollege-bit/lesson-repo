import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/world-countries-logo.png';

interface HeaderProps {
    onReset?: () => void;
}

export default function Header({ onReset }: HeaderProps) {
    const { theme, toggleTheme } = useTheme();

    const isDark = theme === 'dark';

    return (
        <header
            className={
                isDark
                    ? 'bg-[#2b3642] text-white shadow-md py-6 px-4 md:px-12 transition-colors duration-300'
                    : 'bg-white text-[#111517] shadow-md py-6 px-4 md:px-12 transition-colors duration-300'
            }
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link
                    to="/"
                    onClick={onReset}
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                    <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
                    <h1 className="font-extrabold text-lg md:text-xl">
                        სად, მთელ მსოფლიოში?
                    </h1>
                </Link>

                <button
                    type="button"
                    onClick={toggleTheme}
                    className="flex items-center gap-2 text-sm md:text-base font-semibold cursor-pointer hover:opacity-80 transition-opacity"
                >
                    <span>{isDark ? '☀️' : '🌙'}</span>
                    <span>{isDark ? 'ნათელი' : 'ბნელი'}</span>
                </button>
            </div>
        </header>
    );
}