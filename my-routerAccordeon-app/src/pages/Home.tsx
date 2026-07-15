import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (

    <div className="min-h-[80vh] flex flex-col justify-center items-center bg-gray-50 px-4 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
        მოგესალმებით Users App (Fetch) აპლიკაციაში!
      </h1>
      <p className="text-lg text-gray-600 max-w-md mb-8">
        აქ შეგიძლიათ იხილოთ მომხმარებლების სია API-დან.
      </p>
      <Link 
        to="/user" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
      >
        დააკლიკეთ რომ იხილოთ მომხმარებლები
      </Link>
    </div>
  );
}

export default Home;