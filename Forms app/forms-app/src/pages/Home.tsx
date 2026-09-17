import { useNavigate } from 'react-router-dom';

export function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md w-full text-center">
                <h1 className="text-3xl font-bold text-slate-800 mb-4">კეთილი იყოს თქვენი მობრძანება Gaming გამოწერებში</h1>
                <p className="text-slate-500 mb-8 leading-relaxed">
                    აირჩიეთ თქვენს საჭიროებებზე მორგებული საუკეთესო სათამაშო პაკეტი. სწრაფად, მოქნილად და მარტივად გასააქტიურებელი — სულ რამდენიმე ნაბიჯში..
                </p>
                <button
                    onClick={() => navigate('/form')}
                    className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition shadow-md hover:shadow-lg"
                >
                    დაწყება
                </button>
            </div>
        </div>
    );
}