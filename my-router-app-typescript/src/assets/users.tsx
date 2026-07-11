import { useState, useEffect } from 'react'

interface IUser {
  id: number;
  name: string;
  email: string; 
  address: {
    city: string;
  };
}

function UsersList() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data: IUser[]) => {
        setUsers(data);
      })
      .catch((err) => console.error("მონაცემების წამოღების შეცდომა:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8 tracking-tight">
          👥 მომხმარებლების სია
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div 
              key={user.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {user.name.charAt(0)}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">
                  {user.name}
                </h3>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <span className="text-gray-400 font-medium">📧 იმეილი:</span> 
                    <span className="text-blue-500 hover:underline cursor-pointer truncate">{user.email}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gray-400 font-medium">📍 ქალაქი:</span> 
                    <span className="text-gray-700 font-semibold">{user.address.city}</span>
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-50 flex justify-end">
                <button className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                  პროფილის ნახვა →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UsersList;