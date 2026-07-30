import { useState, type FormEvent } from 'react';
import Success from "../assets/icon-success.svg";
import SuccessList from "../assets/icon-list.svg";
import PlaceholderDesktop from "../assets/illustration-sign-up-desktop.svg";
import PlaceholderMobile from "../assets/illustration-sign-up-mobile.svg";

export const Home = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const validateEmail = (emailStr: string) => {
        return /\S+@\S+\.\S+/.test(emailStr);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!email || !validateEmail(email)) {
            setError(true);
        } else {
            setError(false);
            setIsSubscribed(true);
        }
    };

    if (isSubscribed) {
        return (
            <div className="bg-charcoal min-h-[calc(100vh-56px)] flex items-center justify-center p-4 font-sans">
                <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl space-y-6">
                    <div className="w-12 h-12 flex items-center justify-center">
                        <img src={Success} alt="Success icon" />
                    </div>
                    <h1 className="text-3xl font-bold text-dark-slate">მადლობა გამოწერისთვის!</h1>
                    <p className="text-charcoal text-sm leading-relaxed">
                        დადასტურების წერილი გაიგზავნა მისამართზე <strong className="font-semibold">{email}</strong>. გახსენით მიღებული ელფოსტა და დააჭირეთ ღილაკს გამოწერის დასასრულებლად.
                    </p>
                    <button
                        onClick={() => { setIsSubscribed(false); setEmail(''); }}
                        className="w-full bg-dark-slate text-white font-semibold py-3 px-4 rounded-lg hover:bg-tomato hover:shadow-lg hover:shadow-tomato/30 transition-all duration-200 cursor-pointer"
                    >
                        გათიშეთ შეტყობინება
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-charcoal min-h-[calc(100vh-56px)] flex items-center justify-center p-4 font-sans">
            <div className="bg-white rounded-3xl p-6 md:p-8 max-w-4xl w-full shadow-2xl flex flex-col-reverse md:flex-row gap-8">

                <div className="flex-1 flex flex-col justify-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-dark-slate mb-4">მიიღეთ სიახლეები!</h1>
                    <p className="text-charcoal text-sm mb-6">
                        შეუერთდით 60,000+ პროდუქტ მენეჯერს და მიიღეთ ყოველთვიური სიახლეები
                    </p>

                    <ul className="space-y-3 text-sm text-charcoal mb-8">
                        <li className="flex items-start gap-3">
                            <span className="flex-shrink-0 mt-0.5">
                                <img src={SuccessList} alt="Check icon" />
                            </span>
                            პროდუქტის კვლევა (აღმოჩენა) და იმის შექმნა, რაც მართლაც მნიშვნელოვანია
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="flex-shrink-0 mt-0.5">
                                <img src={SuccessList} alt="Check icon" />
                            </span>
                            განახლებების წარმატების შეფასება და გაზომვა
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="flex-shrink-0 mt-0.5">
                                <img src={SuccessList} alt="Check icon" />
                            </span>
                            და ბევრი სხვა რამ!
                        </li>
                    </ul>

                    <form onSubmit={handleSubmit} noValidate className="space-y-2">
                        <div className="flex justify-between items-center text-xs font-bold">
                            <label className="text-dark-slate">ემაილ მისამართი</label>
                            {error && <span className="text-tomato">აუცილებელია მოქმედი ელექტრონული ფოსტის მითითება</span>}
                        </div>

                        <input
                            type="email"
                            placeholder="email@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full p-3.5 rounded-lg border text-sm outline-none transition-colors ${error
                                ? 'border-tomato bg-tomato/10 text-tomato placeholder-tomato/60'
                                : 'border-gray-300 focus:border-dark-slate text-dark-slate'
                                }`}
                        />

                        <button
                            type="submit"
                            className="w-full bg-dark-slate text-white font-semibold py-3.5 px-4 rounded-lg hover:bg-tomato hover:shadow-lg hover:shadow-tomato/30 transition-all duration-200 cursor-pointer mt-4"
                        >
                            გამოიწერე თვიურად newsletter
                        </button>
                    </form>
                </div>

                <div className="flex-1">
                    <picture>
                        <source media="(min-width: 768px)" srcSet={PlaceholderDesktop} />
                        <img
                            src={PlaceholderMobile}
                            alt="Newsletter signup illustration"
                            className="w-full h-auto object-cover rounded-2xl"
                        />
                    </picture>
                </div>

            </div>
        </div>
    );
};