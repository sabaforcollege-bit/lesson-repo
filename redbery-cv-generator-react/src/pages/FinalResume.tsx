import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResumePreview } from '../components/resume/ResumePreview';
import { clearStoredResumeData } from '../utils/storage';

export function FinalResume() {
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(true);

    const handleRestart = () => {
        // ასუფთავებს LocalStorage-ს (Reset)
        clearStoredResumeData();
        // გადადის მთავარ გვერდზე
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-[#F9F9F9] flex flex-col items-center justify-center p-8 relative">
            {/* მარცხენა ზედა უკან დაბრუნების ღილაკი */}
            <button
                type="button"
                onClick={() => navigate('/')}
                className="absolute left-12 top-12 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition-colors"
            >
                &#10094;
            </button>

            {/* ცენტრალური CV */}
            <div className="w-[800px] bg-white border border-gray-300 shadow-sm p-4 rounded-sm my-8">
                <ResumePreview />
            </div>

            {/* ქვედა ღილაკი - თავიდან დაწყება / Reset */}
            <div className="mt-4">
                <button
                    type="button"
                    onClick={handleRestart}
                    className="bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors shadow-md"
                >
                    ხელახლა შევსება / Reset
                </button>
            </div>

            {/* Pop-up შეტყობინება მარჯვნივ */}
            {showToast && (
                <div className="fixed top-12 right-12 bg-white border border-gray-100 rounded-xl shadow-xl p-6 w-80 flex justify-between items-start z-50">
                    <p className="text-xl font-bold text-gray-800 leading-snug">
                        რეზიუმე წარმატებით <br /> გაიგზავნა 🎉
                    </p>
                    <button
                        type="button"
                        onClick={() => setShowToast(false)}
                        className="text-gray-400 hover:text-gray-600 text-lg font-bold"
                    >
                        &#10005;
                    </button>
                </div>
            )}
        </div>
    );
}