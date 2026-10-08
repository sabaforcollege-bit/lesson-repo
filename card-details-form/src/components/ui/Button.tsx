import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export function Button({ children, className = '', ...props }: ButtonProps) {
    return (
        <button
            className={`w-full bg-[#1A1A1A] hover:bg-[#E50914] text-white font-semibold py-3 rounded-lg transition-colors shadow-md ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}