import { type FieldInputProps, type FieldMetaProps } from 'formik';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    hint?: string;
    field?: FieldInputProps<any>;
    meta?: FieldMetaProps<any>;
}

export function Input({ label, hint, field, meta, ...props }: InputProps) {
    const hasError = meta?.touched && meta?.error;

    return (
        <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-bold text-gray-800">{label}</label>
            <input
                {...field}
                {...props}
                className={`w-full p-3 border rounded-md text-gray-700 focus:outline-none transition-colors ${hasError
                        ? 'border-red-500 focus:border-red-500' // 👈 მარტო ნაცრისფერი ჩარჩო გაწითლდება
                        : 'border-gray-300 focus:border-blue-500'
                    } ${props.className || ''}`}
            />
            {hasError ? (
                <span className="text-xs text-red-500">{meta.error}</span>
            ) : (
                hint && <span className="text-xs text-gray-400">{hint}</span>
            )}
        </div>
    );
}