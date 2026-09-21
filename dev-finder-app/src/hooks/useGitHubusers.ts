import { useState, useEffect } from 'react';
import type { GitHubUser } from '../types/github';

export function useGitHubUsers(searchTerm: string) {
    const [users, setUsers] = useState<GitHubUser[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!searchTerm.trim()) {
            fetchDefaultUsers();
            return;
        }

        const timer = setTimeout(() => {
            fetchSearchedUsers(searchTerm);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    async function fetchDefaultUsers() {
        setLoading(true);
        try {
            const response = await fetch('https://api.github.com/users');
            if (!response.ok) throw new Error('მონაცემების წამოღება ვერ მოხერხდა');
            const data: GitHubUser[] = await response.json();
            setUsers(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'უცნობი შეცდომა');
        } finally {
            setLoading(false);
        }
    }

    async function fetchSearchedUsers(query: string) {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${query}`);
            if (!response.ok) throw new Error('ძებნისას დაფიქსირდა შეცდომა');

            const data = await response.json();
            setUsers(data.items || []);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'უცნობი შეცდომა');
        } finally {
            setLoading(false);
        }
    }

    return { users, loading, error };
}