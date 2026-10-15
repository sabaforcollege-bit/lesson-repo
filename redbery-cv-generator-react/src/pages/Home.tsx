import { useNavigate } from 'react-router-dom';
import logoImage from '../assets/redberry.ge-Logo-with-text.png';

export function Home() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-orange-100 p-6">
            <div className="flex flex-col items-center gap-12">
                <img
                    src={logoImage}
                    alt="Redberry Logo"
                    className="h-25 object-contain"
                />

                <button
                    onClick={() => navigate('/personal-info')}
                    className="px-8 py-4 bg-gray-900 text-white font-medium rounded-xl shadow-lg hover:bg-gray-800 transition-all duration-200"
                >
                    რეზიუმეს დამატება
                </button>
            </div>

        </div>
    );
}