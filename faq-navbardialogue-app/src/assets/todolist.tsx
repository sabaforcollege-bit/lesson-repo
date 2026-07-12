import { useState, useEffect } from 'react';
import TodoItem from './todoitems';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then((res) => res.json())
            .then((data) => {
                setTodos(data);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, []);

    const handleDelete = (id: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const openModal = (todo: Todo) => {
        setSelectedTodo(todo);
        setIsModalOpen(true);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6 max-w-3xl box-border">
            {/* სათაურის ბლოკი */}
            <div className="mb-6 border-b border-slate-200 pb-4">
                <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-1">ჩემი დავალებები</h1>
                <p className="text-sm text-slate-500 font-medium">სულ ხელმისაწვდომია: <span className="text-cyan-600 font-bold">{todos.length}</span></p>
            </div>

            {/* ბარათების (Cards) ვერტიკალური სია ზემოდან ქვემოთ */}
            <div className="flex flex-col space-y-3">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={handleDelete}
                        onOpenModal={openModal}
                    />
                ))}
            </div>

            {/* დიალოგის ფანჯარა */}
            {isModalOpen && selectedTodo && (
                <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 border border-slate-100 focus:outline-none">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg font-bold text-slate-900">დავალების დეტალები</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 text-2xl font-semibold cursor-pointer focus:outline-none">&times;</button>
                        </div>
                        <div className="space-y-4 my-5 bg-slate-50 p-4 rounded-2xl">
                            <p className="text-sm text-slate-500"><span className="font-semibold text-slate-700">ID ნომერი:</span> #{selectedTodo.id}</p>
                            <p className="text-slate-700 capitalize"><span className="font-semibold text-slate-900">სათაური:</span> {selectedTodo.title}</p>
                            <div className="flex items-center space-x-2">
                                <span className="font-semibold text-slate-900 text-sm">სტატუსი:</span>
                                <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${selectedTodo.completed ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                                    {selectedTodo.completed ? 'შესრულებულია' : 'პროცესშია'}
                                </span>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button onClick={() => setIsModalOpen(false)} className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-colors focus:outline-none">დახურვა</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}