import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="text-center max-w-md p-8 bg-white border border-zinc-200/80 rounded-2xl">
      <h1 className="text-2xl font-bold text-zinc-800 mb-2">მოგესალმებით ასაკის გამომთვლელ აპლიკაციაში</h1>
      <p className="text-sm text-zinc-400 mb-6">
        ეს აპლიკაცია დაგეხმარებათ მარტივად და პირდაპირ გამოითვალოთ თქვენი ასაკი
        წლის,თვისა და დღის მიხედვით
      </p>
      <Link
        to="/age-calculator"
        className="inline-block rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
      >
        დააკლიკეთ რომ გადახვიდეთ კალკულატორზე
      </Link>
    </div>
  );
}