import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          Gaming დანამატები
        </h1>
        <p className="text-slate-600 mb-6">
          შემოუერთდი და გაწევრიანდი ჩვენს Gaming აპლიკაცია გამოიწერე თვიური ან წლიური წვდომა ჩვენს შემოთავაზებებზე.
        </p>
        <Link
          to="/form"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          დაიწყეთ შევსება
        </Link>
      </div>
    </div>
  );
}