import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <div className="min-h-[calc(100vh-4rem)] bg-slate-100 flex flex-col justify-center items-center px-4 py-12">
            <div className="max-w-2xl bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 text-center flex flex-col items-center gap-6">

                <span className="px-4 py-1.5 bg-slate-100 text-slate-800 text-xs font-bold rounded-full uppercase tracking-wider border border-slate-200">
                    მთავარი მენიუ
                </span>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
                    მარტივად გაყავით ანგარიში და ჩაის თანხა მეგობრებში
                </h1>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg">
                    მოგესალმებით თანხის გამყოფ და ჩაის ფულის გამომთვლელ კალკულატორის აპლილაციაში კეთილი იყოს თქვენი მობრძანება იმედია დაგეხმარებით!
                </p>

                <Link
                    to="/calculator"
                    className="mt-2 bg-slate-800 hover:bg-slate-900 text-white font-extrabold py-4 px-8 rounded-2xl shadow-lg active:scale-95 transition-all duration-200 text-lg flex items-center gap-2"
                >
                    დააკლიკეთ კალკულატორზე გადასასვლელად
                </Link>
            </div>
        </div>
    );
};