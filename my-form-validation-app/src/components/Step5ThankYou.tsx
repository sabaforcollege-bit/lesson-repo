import { useNavigate } from 'react-router-dom';
import iconThankYou from '../assets/icon-thank-you.svg';

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center py-8 gap-4 my-auto">
      <img src={iconThankYou} alt="Thank you" className="w-16 h-16" />
      <h2 className="text-3xl font-bold text-slate-800">მადლობა!</h2>
      <h3 className="text-3xl font-bold text-slate-800">გამოწერა დადასტურებულია!</h3>
      <p className="text-slate-400 text-sm max-w-md leading-relaxed">
        გმადლობთ რომ შემოუერთდით ჩვენს აპლიკაციას, ვიმედოვნებთ, რომ ჩვენი პლატფორმით სარგებლობა სიამოვნებას მოგანიჭებთ. დახმარების საჭიროების შემთხვევაში, გთხოვთ, მოგვწეროთ ელფოსტაზე: support@loremgaming.com.
      </p>
      <button
        type="button"
        onClick={() => navigate('/')}
        className="mt-4 bg-[#02295a] hover:bg-[#164A8A] text-white font-medium px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
      >
        მთავარ გვერდზე დაბრუნება
      </button>
    </div>
  );
}