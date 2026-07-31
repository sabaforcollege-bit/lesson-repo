import type { GitHubUser } from "../types/github";

interface UserCardProps {
    user: GitHubUser;
}

export function UserCard({ user }: UserCardProps) {
    return (
        <div className="p-6 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-2xl shadow-lg space-y-4 border border-slate-200 dark:border-slate-700 transition-colors duration-300">
            <div className="flex items-center gap-4">
                <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-20 h-20 rounded-full border-2 border-blue-500"
                />
                <div>
                    <h2 className="text-2xl font-bold">{user.name || user.login}</h2>
                    <a
                        href={user.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        @{user.login}
                    </a>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Joined {new Date(user.created_at).toLocaleDateString()}
                    </p>
                </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300">
                {user.bio || "ამ მომხმარებელს ბიოგრაფია არ აქვს მითითებული."}
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-slate-100 dark:bg-slate-900 rounded-xl text-center">
                <div>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">Repos</span>
                    <span className="text-lg font-bold">{user.public_repos}</span>
                </div>
                <div>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">Followers</span>
                    <span className="text-lg font-bold">{user.followers}</span>
                </div>
                <div>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">Following</span>
                    <span className="text-lg font-bold">{user.following}</span>
                </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-300 pt-2">
                <p>📍 Location: {user.location || "N/A"}</p>
                <p>🏢 Company: {user.company || "N/A"}</p>
                <p>
                    🔗 Blog:{" "}
                    {user.blog ? (
                        <a
                            href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            {user.blog}
                        </a>
                    ) : (
                        "N/A"
                    )}
                </p>
            </div>
        </div>
    );
}