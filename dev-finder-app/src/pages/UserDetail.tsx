import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { GitHubUserDetail } from '../types/github';

export function UserDetail() {
    const { username } = useParams<{ username: string }>();
    const [user, setUser] = useState<GitHubUserDetail | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUserDetail() {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                const data = await response.json();
                setUser(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        if (username) fetchUserDetail();
    }, [username]);

    if (loading) return <div className="text-center py-10">იტვირთება...</div>;
    if (!user) return <div className="text-center py-10">მომხმარებელი ვერ მოიძებნა</div>;

    return (
        <div className="max-w-xl mx-auto my-10 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <Link to="/search" className="text-blue-600 hover:underline mb-4 inline-block">
                უკან დაბრუნება
            </Link>

            <div className="flex flex-col items-center">
                <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
                />
                <h2 className="text-2xl font-bold">{user.name || user.login}</h2>
                <p className="text-gray-500 mb-4">@{user.login}</p>
                {user.bio && <p className="text-center text-gray-700 mb-4">{user.bio}</p>}

                <div className="flex gap-6 border-t border-b py-3 my-2 w-full justify-center text-center">
                    <div>
                        <span className="font-bold block">{user.public_repos}</span>
                        <span className="text-xs text-gray-500">რეპოზიტორი</span>
                    </div>
                    <div>
                        <span className="font-bold block">{user.followers}</span>
                        <span className="text-xs text-gray-500">მიმდევრები</span>
                    </div>
                    <div>
                        <span className="font-bold block">{user.following}</span>
                        <span className="text-xs text-gray-500">მისდევს</span>
                    </div>
                </div>

                <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                    GitHub-ზე ნახვა
                </a>
            </div>
        </div>
    );
}