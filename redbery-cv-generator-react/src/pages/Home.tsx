import { useNavigate } from 'react-router-dom';

export function Home() {
    const navigate = useNavigate();

    return (
        <div className="relative w-full h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 flex items-center justify-center">
            {/* ცენტრალური ღილაკი */}
            <button
                onClick={() => navigate('/personal-info')}
                className="px-8 py-4 bg-[#212529] text-white text-lg font-medium rounded-md hover:bg-black transition-all shadow-lg"
            >
                რეზიუმეს დამატება
            </button>
        </div>
    );
}