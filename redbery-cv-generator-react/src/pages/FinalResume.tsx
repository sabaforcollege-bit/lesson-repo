import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hook';
import { resetResume } from '../store/resumeSlice';
import { ResumePreview } from '../components/resume/ResumePreview';

export function FinalResume() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleReset = () => {
        dispatch(resetResume()); // ასუფთავებს Redux-ს და localStorage-ს
        navigate('/'); // აბრუნებს მთავარ გვერდზე სუფთა ველებით
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 relative">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-3xl border border-gray-200 mb-6">
                <ResumePreview />
            </div>

            <button
                onClick={handleReset}
                className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg shadow hover:bg-red-700 transition-colors"
            >
                ხელახლა შევსება / Reset
            </button>
        </div>
    );
}