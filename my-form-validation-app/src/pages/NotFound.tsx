import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f0f6ff] flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full flex flex-col items-center gap-4">
        <h1 className="text-6xl font-bold text-[#473dff]">404</h1>
        <h2 className="text-2xl font-bold text-[#02295a]">გვერდი ვერ მოიძებნა</h2>
        <p className="text-[#9699ab] text-sm">
          გვერდი, რომელსაც ეძებთ, არ არსებობს ან გადატანილია.
        </p>
        <Link
          to="/"
          className="bg-[#02295a] hover:bg-[#164A8A] text-white font-medium px-6 py-2.5 rounded-lg transition-colors mt-2"
        >
          მთავარ გვერდზე დაბრუნება
        </Link>
      </div>
    </div>
  );
}