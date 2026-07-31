import { useState } from "react";

interface SearchBarProps {
    onSearch: (username: string) => void;
    loading: boolean;
}

export function SearchBar({ onSearch, loading }: SearchBarProps) {
    const [username, setUsername] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!username.trim()) return;
        onSearch(username);
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-3">
            <input
                type="text"
                placeholder="ჩაწერილი GitHub მომხმარებელი (მაგ: octocat)..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1 p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl transition-colors"
            >
                {loading ? "Searching..." : "Search"}
            </button>
        </form>
    );
}