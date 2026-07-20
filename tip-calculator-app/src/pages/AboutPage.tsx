import { Link } from 'react-router-dom';
import logoImg from '../assets/Tip_Calculator_Logo and name.png';

export const AboutPage = () => {
    return (
        <div className="min-h-[calc(100vh-4rem)] bg-slate-100 flex flex-col justify-center items-center px-4 py-12">
            <div className="max-w-2xl bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 flex flex-col gap-6">

                <div className="border-b border-slate-100 pb-6">
                    <span className="px-4 py-1.0 bg-slate-100 text-slate-800 text-xs font-bold rounded-full uppercase tracking-wider border border-slate-200">
                        ჩვენს შესახებ
                    </span>
                    <h1 className="text-3xl font-extrabold text-slate-800 mt-1">
                        <img src={logoImg} alt="Splitter Logo" className="h-25 w-55 object-contain" />
                    </h1>
                </div>

                <div className="flex flex-col gap-4 text-slate-600 leading-relaxed">
                    <p>
                        ეს აპლიკაცია შექმნილია იმისათვის, რომ რესტორანში ან კაფეში მეგობრებთან ერთად ყოფნისას თავიდან აირიდოთ რთული მათემატიკური გამოთვლები.
                    </p>
                    <p>
                        ეს არის ჩაის ფულის გამომთვლელი კალკულატორის აპლიკაცია რომელსაც ასევე გააჩნია თანხის განმანაწილებლის ფუნქცია, ეს აგებული არის react and typescript ის მეშვეობით სადაც გამოყენებული გვაქვს React Router. კალკულატორში წერთ თანხის რაოდენობას ჩაის ფულის პროცენტს და ადამიანთა რაოდენობას და აპლიკაცია უმალვე გამოთვლის იმ ჩაის ფულის რაოდენოაბს და მას მიუმატებს გადასახდელ თანხას
                    </p>
                </div>

                <div className="pt-2">
                    <Link
                        to="/"
                        className="inline-block bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-sm"
                    >
                        მთავარ გვერდზე დაბრუნება
                    </Link>
                </div>
            </div>
        </div>
    );
};