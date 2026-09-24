import { Link } from "react-router-dom";

export function HomePage() {
    return (
        <div className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl font-extrabold mb-4 text-slate-800">
                მოგესალმებით ჩვენს მაღაზიაში!
            </h1>
            <p className="text-slate-600 text-lg max-w-xl mb-8">
                ეს არის პროგრამა, სადაც შეგიძლიათ დაათვალიეროთ პროდუქტების
                კატალოგი, ნახოთ დეტალური ინფორმაცია და შეინახოთ ფავორიტი ნივთები.
            </p>
            <Link
                to="/products"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
                პროდუქტების ნახვა
            </Link>
        </div>
    );
}