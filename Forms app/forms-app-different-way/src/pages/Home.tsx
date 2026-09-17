import { useNavigate } from 'react-router-dom';

export function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md w-full text-center">
                <h1 className="text-3xl font-bold text-slate-800 mb-4">Welcome to Gaming Subscriptions</h1>
                <p className="text-slate-500 mb-8 leading-relaxed">
                    Choose the best gaming plan for your needs. Fast, flexible, and simple to setup in just a few steps.
                </p>
                <button
                    onClick={() => navigate('/form')}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition shadow-md hover:shadow-lg"
                >
                    Get Started
                </button>
            </div>
        </div>
    );
}