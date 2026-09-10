import { Link } from 'react-router-dom';
import type { CardProps } from '../types/interface';

import iconSupervisor from '../assets/icon-supervisor.svg';
import iconTeamBuilder from '../assets/icon-team-builder.svg';
import iconKarma from '../assets/icon-karma.svg';
import iconCalculator from '../assets/icon-calculator.svg';

function Card({ title, description, icon, borderColor, path }: CardProps) {
    return (
        <Link
            to={path}
            className={`relative flex flex-col justify-between rounded-lg bg-white p-7 shadow-xl border-t-4 ${borderColor} hover:scale-105 transition-transform duration-300 cursor-pointer h-[250px] w-full max-w-[350px]`}
        >
            <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
            <div className="flex justify-end mt-4">
                <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            </div>
        </Link>
    );
}

export default function Home() {
    return (
        <main className="px-4 flex flex-col items-center pb-12">
            <header className="text-center max-w-xl mb-12">
                <h1 className="text-2xl sm:text-3xl font-extralight text-gray-600 tracking-wide">
                    საიმედო და ეფექტიანი მიწოდება
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-1 mb-4">
                    ტექნოლოგიაზე დაფუძნებული
                </h2>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                    ხელოვნურ ინტელექტზე დაფუძნებული ჩვენი ინსტრუმენტები პროექტის შესახებ მილიონობით მონაცემს იყენებს, რათა თქვენი პროექტის წარმატება უზრუნველყოს
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl w-full justify-items-center">
                <div className="md:col-span-1 flex justify-center w-full">
                    <Card
                        title="ზედამხედველი"
                        description="აკვირდება საქმიანობას პროექტის შემაფერხებელი ფაქტორების გამოსავლენად"
                        icon={iconSupervisor}
                        borderColor="border-cyan-400"
                        path="/supervisor"
                    />
                </div>

                <div className="md:col-span-1 flex flex-col gap-8 w-full items-center">
                    <Card
                        title="გუნდის ფორმირება"
                        description="სკანირებს ჩვენს ნიჭიერების ქსელს თქვენი პროექტისთვის ოპტიმალური გუნდის შესაქმნელად"
                        icon={iconTeamBuilder}
                        borderColor="border-red-400"
                        path="/team-builder"
                    />
                    <Card
                        title="კარმა"
                        description="ხარისხის უზრუნველსაყოფად რეგულარულად აფასებს ჩვენს კადრებს"
                        icon={iconKarma}
                        borderColor="border-amber-400"
                        path="/karma"
                    />
                </div>

                <div className="md:col-span-1 flex justify-center w-full">
                    <Card
                        title="კალკულატორი"
                        description="იყენებს წარსული პროექტების მონაცემებს შესრულების ვადების უფრო ზუსტი შეფასებისთვის"
                        icon={iconCalculator}
                        borderColor="border-blue-500"
                        path="/calculator"
                    />
                </div>
            </div>
        </main>
    );
}