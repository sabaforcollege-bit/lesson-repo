import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { User } from '../types and components/User';

function UserDetails() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data: User) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">მომხმარებელი ვერ მოიძებნა!</h2>
        <Link 
  to="/user" 
  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-6 gap-2 transition-colors"
>
  <span>←</span> უკან დაბრუნება
</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-6 gap-2 transition-colors"
        >
          <span>←</span> უკან დაბრუნება
        </Link>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 text-white flex items-center gap-5">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl font-extrabold shadow-inner">
              {user.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-blue-100 text-sm">@{user.username}</p>
            </div>
          </div>

          <div className="p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">ელ-ფოსტა</label>
                <p className="text-gray-800 font-medium mt-1 break-words">{user.email}</p>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">ტელეფონი</label>
                <p className="text-gray-800 font-medium mt-1">{user.phone}</p>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">ვებსაიტი</label>
                <p className="text-gray-800 font-medium mt-1">
                  <a href={`https://${user.website}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                    {user.website}
                  </a>
                </p>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">კომპანია</label>
                <p className="text-gray-800 font-medium mt-1">{user.company.name}</p>
                <p className="text-xs text-gray-500 italic mt-0.5">"{user.company.catchPhrase}"</p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">მისამართი</label>
              <p className="text-gray-800 font-medium mt-1">
                {user.address.street}, {user.address.suite}, {user.address.city} (Zip: {user.address.zipcode})
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;