import type { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'outline' | 'link';
    onClick?: () => void;
    className?: string;
}

export function Button({
    children,
    type = 'button',
    variant = 'primary',
    onClick,
    className = '',
}: ButtonProps) {
    const baseStyle = 'px-6 py-3 rounded-md font-medium transition-colors focus:outline-none';

    const variants = {
        primary: 'bg-[#6B46C1] text-white hover:bg-[#5A38A8]',
        secondary: 'bg-[#62A1EB] text-white hover:bg-[#5190DA]',
        outline: 'border border-[#62A1EB] text-[#62A1EB] hover:bg-blue-50',
        link: 'bg-transparent text-gray-700 hover:text-black p-0',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}