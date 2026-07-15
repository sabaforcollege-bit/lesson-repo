import React from 'react';
import { Link } from 'react-router-dom';
import type { User } from './User';

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-white border border-gray-150 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
          <Link to={`/user/${user.id}`}>
            {user.name}
          </Link>
        </h3>
        
        <div className="space-y-2 text-sm text-gray-600">
          <p className="flex items-center gap-2">
            <span className="text-base">📧</span> 
            <span className="truncate" title={user.email}>{user.email}</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-base">📞</span> 
            <span>{user.phone}</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-base">🏢</span> 
            <span className="font-medium text-gray-700">{user.company.name}</span>
          </p>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-gray-100">
        <Link 
          to={`/user/${user.id}`} 
          className="inline-block w-full text-center bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-4 rounded-xl transition-colors duration-200"
        >
          დეტალების ნახვა
        </Link>
      </div>
    </div>
  );
}

export default UserCard;