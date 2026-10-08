import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    touched?: boolean;
}

export function Input({ label, error, touched, className = '', ...props }: InputProps) {
    const hasError = touched && error;

    return (
        <div className="flex flex-col gap-1 w-full">
            {label && (
                <label className="text-xs font-bold tracking-widest text-[#1A1A1A] uppercase">
                    {label}
                </label>
            )}
            <input
                autoComplete="off"
                className={`w-full px-4 py-2 text-base rounded-lg border outline-none transition-colors ${hasError
                        ? 'border-[#E50914] focus:border-[#E50914]'
                        : 'border-gray-300 focus:border-black'
                    } ${className}`}
                {...props}
            />
            {hasError && <span className="text-xs text-[#E50914] font-medium">{error}</span>}
        </div>
    );
}