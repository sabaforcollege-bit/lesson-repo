import { Link } from 'react-router-dom';

export function About() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-6 bg-slate-100 p-4">
            <h1 className="text-4xl font-bold text-[#21092F]">ჩვენ შესახებ</h1>
            <p className="text-gray-600 text-center max-w-md">
                ეს არის ბანკის ბარათის დამადასტურებელი აპლიკაცია, სადაც შეგიძლიათ დადასტურება გაუკეთოთ თქვენ საბანკო ბარათს მის გამოყენებამდე
            </p>
            <p className="text-gray-600 text-center max-w-md">
                აპლიკაცია შესრულებულია React, Vite, React Router Dom, Tailwind CSS, Formik და Yup ტექნოლოგიებით.
            </p>
            <Link
                to="/"
                className="bg-[#21092F] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
                მთავარზე დაბრუნება
            </Link>
        </div>
    );
}