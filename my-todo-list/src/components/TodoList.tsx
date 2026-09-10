import { useState, useEffect } from 'react';
import type { Todo } from '../types/type';
import logo from '../assets/logo.png';

export function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

                if (!response.ok) {
                    throw new Error('მონაცემების წამოღება ვერ მოხერხდა');
                }

                const data: Todo[] = await response.json();
                setTodos(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'დაფიქსირდა შეცდომა');
            } finally {
                setLoading(false);
            }
        };

        fetchTodos();
    }, []);

    if (loading) return <p className="text-center mt-10 text-gray-500">იტვირთება...</p>;
    if (error) return <p className="text-center mt-10 text-red-500">შეცდომა: {error}</p>;

    return (
        <div className="max-w-xl mx-auto my-10 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <img
                    src={logo}
                    alt="Todo App Logo"
                    className="w-8 h-8 object-contain rounded-md"
                />
                <h1 className="text-2xl font-semibold text-gray-800">Todo List</h1>
            </div>

            <ul className="divide-y divide-gray-100">
                {todos.map((todo) => (
                    <li key={todo.id} className="py-3.5 flex items-center justify-between text-sm hover:bg-gray-50/50 rounded-lg px-2 -mx-2 transition-colors">
                        <div className="flex items-center gap-3">
                            <span className="text-xs text-gray-400 font-mono">#{todo.id}</span>
                            <span className="text-gray-700 font-medium">{todo.title}</span>
                        </div>

                        <span
                            className={`text-xs px-2.5 py-1 rounded-full font-bold ${todo.completed
                                ? 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/10'
                                : 'bg-gray-100 text-gray-600 ring-1 ring-inset ring-gray-500/10'
                                }`}
                        >
                            {todo.completed ? 'True' : 'False'}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}