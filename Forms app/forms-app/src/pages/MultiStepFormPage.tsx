import { useNavigate, Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

export function MultiStepFormPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-4xl mb-4 flex justify-between items-center">
                <button
                    onClick={() => navigate('/')}
                    className="cursor-pointer text-slate-500 hover:text-slate-800 font-medium text-sm flex items-center gap-1"
                >
                    ← მთავარზე დაბრუნება
                </button>
            </div>

            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg flex flex-col md:flex-row w-full max-w-4xl min-h-[550px]">
                <Sidebar />

                <div className="flex-1 px-4 md:px-12 py-6 flex flex-col justify-between">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}