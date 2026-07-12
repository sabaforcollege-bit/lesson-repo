import { Link } from 'react-router-dom';
import myLogo from './img/pngtree-hand-drawn-grey-router-illustration-image_1401897-removebg-preview.png';

export default function Navbar() {
    const menuItems = [
        { name: 'მთავარი', path: '/' },
        { name: 'ჩვენ შესახებ', path: '/about' },
        { name: 'To-Do სია', path: '/todos' }
    ];

    return (
        <nav className="bg-slate-900 text-white p-4 shadow-lg border-b border-slate-800">
            <div className="container mx-auto flex justify-between items-center px-4">
                <Link to="/" className="flex items-center space-x-3 no-underline cursor-pointer select-none group">
                    <img src={myLogo} alt="Logo" className="w-10 h-10 rounded-xl object-cover" />
                    <span className="text-xl font-bold tracking-wider text-cyan-400 group-hover:text-cyan-350 transition-colors">
                        MyRouterApp
                    </span>
                </Link>
                <ul className="flex space-x-8 m-0 p-0 list-none">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className="hover:text-cyan-400 transition-colors duration-200 font-medium cursor-pointer no-underline focus:outline-none">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}