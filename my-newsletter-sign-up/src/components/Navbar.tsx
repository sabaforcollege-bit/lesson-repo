import { Link } from 'react-router-dom';
import Logo from "../assets/Newsletter-Signup_Logo.png";

export const Navbar = () => {
    return (
        <nav className="bg-dark-slate p-4 text-white flex items-center gap-6 shadow-md font-sans">
            <Link to="/" className="flex items-center">
                <img src={Logo} alt="Logo" className="h-15 w-auto object-contain" />
            </Link>
            <Link to="/" className="hover:text-tomato transition-colors duration-200">
                მთავარი
            </Link>
            <Link to="/aboutUS" className="hover:text-tomato transition-colors duration-200">
                ჩვენს შესახებ
            </Link>
            <Link to="/login" className="hover:text-tomato transition-colors duration-200">
                შესვლა
            </Link>
        </nav>
    );
};