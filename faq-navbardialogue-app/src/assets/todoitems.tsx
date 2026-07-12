import React from 'react';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface TodoItemProps {
    todo: Todo;
    onDelete: (id: number, e: React.MouseEvent) => void;
    onOpenModal: (todo: Todo) => void;
}

export default function TodoItem({ todo, onDelete, onOpenModal }: TodoItemProps) {
    return (
        <div
            onClick={() => onOpenModal(todo)}
            /* ეს კლასები თითოეულ რიგს აქცევს დამოუკიდებელ ლამაზ ბარათად (Card) */
            className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-cyan-400 cursor-pointer transition-all duration-250 flex justify-between items-center box-border"
        >
            {/* მარცხენა მხარე: ID და სათაური გვერდიგვერდ */}
            <div className="flex items-center space-x-4 pr-4">
                <span className="text-sm font-bold text-slate-400 w-8 shrink-0">#{todo.id}</span>
                <span className={`text-slate-700 font-medium capitalize text-sm md:text-base ${todo.completed ? 'line-through text-slate-400' : ''}`}>
                    {todo.title}
                </span>
            </div>

            {/* მარჯვენა მხარე: წაშლის ღილაკი */}
            <button
                onClick={(e) => onDelete(todo.id, e)}
                className="bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white px-4 py-2 rounded-xl text-xs md:text-sm font-semibold cursor-pointer transition-all duration-150 shrink-0 focus:outline-none focus:ring-0"
            >
                წაშლა
            </button>
        </div>
    );
}