import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../context/formContext';
import iconThankYou from '../assets/icon-thank-you.svg';

export function Step5ThankYou() {
    const { resetForm } = useFormContext();
    const navigate = useNavigate();

    const handleGoHome = () => {
        resetForm();
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center h-full text-center py-12">
            <img src={iconThankYou} alt="Thank You" className="w-20 h-20 mb-6" />

            <h1 className="text-3xl font-bold text-slate-800 mb-3">მადლობა!</h1>

            <p className="text-slate-400 max-w-md leading-relaxed mb-8">
                მადლობა ჩვენი გამოწერისთვის! ვიმედოვნებთ, რომ ჩვენი პლატფორმის გამოყენებით კარგ დროს გაატარებთ. თუ დახმარება დაგჭირდებათ, გთხოვთ, მოგვწეროთ ელფოსტაზე: support@gaming.com.
            </p>

            <button
                type="button"
                onClick={handleGoHome}
                className="cursor-pointer bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition font-medium text-sm shadow-md"
            >
                მთავარზე დაბრუნება
            </button>
        </div>
    );
}