import { Link } from 'react-router-dom';
import Logo from "../assets/404-error-not-found.png"

export const NotFound = () => {
    return (
        <div className="bg-charcoal min-h-[calc(100vh-56px)] flex items-center justify-center p-4 font-sans text-center">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl space-y-4">
                <img src={Logo} alt="" />
                <p className="text-charcoal text-sm leading-relaxed">
                    გვერდი, რომელსაც ეძებთ, არ არსებობს ან გადატანილია სხვა მისამართზე.
                </p>
                <Link
                    to="/"
                    className="inline-block w-full bg-dark-slate text-white font-semibold py-3 px-4 rounded-lg hover:bg-tomato hover:shadow-lg hover:shadow-tomato/30 transition-all duration-200"
                >
                    მთავარ გვერდზე დაბრუნება
                </Link>
            </div>
        </div>
    );
};