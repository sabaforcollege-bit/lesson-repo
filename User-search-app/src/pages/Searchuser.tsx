import { useState } from "react";
import type { GitHubUser } from "../types/github";
import { SearchBar } from "../components/SearchBar";
import { UserCard } from "../components/UserCard";

export function SearchUser() {
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (username: string) => {
        setLoading(true);
        setError("");
        setUser(null);

        try {
            const res = await fetch(`https://api.github.com/users/${username}`);
            if (!res.ok) {
                throw new Error("მომხმარებელი ვერ მოიძებნა");
            }
            const data: GitHubUser = await res.json();
            setUser(data);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("შეცდომა მონაცემების წამოღებისას");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <SearchBar onSearch={handleSearch} loading={loading} />

            {loading && <p className="text-center text-slate-500 dark:text-slate-400">იტვირთება...</p>}
            {error && <p className="text-center text-red-500 font-medium">{error}</p>}

            {user && <UserCard user={user} />}
        </div>
    );
}