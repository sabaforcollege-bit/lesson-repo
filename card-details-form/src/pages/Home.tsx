import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-6 bg-slate-100 p-4">
            <h1 className="text-4xl font-bold text-[#21092F]">მთავარი გვერდი</h1>
            <p className="text-gray-600 text-center max-w-md">
                კეთილი იყოს თქვენი მობრძანება ჩვენს აპლიკაციაში! გადადით ბარათის დეტალების შევსების გვერდზე.
                გაუკეთეთ დადასტურება თქვენს ბარათს!
            </p>
            <Link
                to="/card"
                className="bg-[#21092F] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
                ბარათის ფორმა
            </Link>

        </div>
    );
}