import { useState } from 'react';
import { useGitHubUsers } from '../hooks/useGitHubusers';
import { UserCard } from '../components/UserCard';

export function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const { users, loading, error } = useGitHubUsers(searchTerm);

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">GitHub მომხმარებლები</h1>

            <input
                type="text"
                placeholder="მოძებნეთ მომხმარებელი..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-md p-3 mb-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />

            {loading && (
                <div className="text-center py-10 text-blue-500 font-medium">იტვირთება მონაცემები...</div>
            )}

            {error && (
                <div className="text-center py-10 text-red-500 font-medium">შეცდომა: {error}</div>
            )}

            {!loading && !error && users.length === 0 && (
                <div className="text-center py-10 text-gray-500">
                    მომხმარებელი ვერ მოიძებნა.
                </div>
            )}

            {!loading && !error && users.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            )}
        </div>
    );
}