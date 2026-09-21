import { Link } from 'react-router-dom';
import type { GitHubUser } from '../types/github';

interface UserCardProps {
    user: GitHubUser;
}

export function UserCard({ user }: UserCardProps) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex flex-col items-center hover:shadow-lg transition">
            <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 rounded-full mb-3 border-2 border-blue-500"
            />
            <h3 className="font-semibold text-lg text-gray-800 mb-2">{user.login}</h3>
            <Link
                to={`/user/${user.login}`}
                className="text-sm bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition"
            >
                დეტალები
            </Link>
        </div>
    );
}