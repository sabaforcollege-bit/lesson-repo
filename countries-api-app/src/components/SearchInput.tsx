import { useState, type FormEvent } from 'react';
import { useTheme } from '../context/ThemeContext';

interface SearchInputProps {
    onSearch: (searchTerm: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
    const [inputValue, setInputValue] = useState('');
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSearch(inputValue);
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
            <input
                type="text"
                placeholder="მოძებნე ქვეყანა..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className={
                    isDark
                        ? 'w-full md:w-80 px-4 py-3 bg-[#2b3642] text-white placeholder-gray-400 rounded shadow-md text-sm outline-none transition-colors duration-300'
                        : 'w-full md:w-80 px-4 py-3 bg-white text-[#111517] placeholder-gray-500 rounded shadow-md text-sm outline-none transition-colors duration-300'
                }
            />
            <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded shadow-md transition-colors cursor-pointer"
            >
                ძებნა
            </button>
        </form>
    );
}