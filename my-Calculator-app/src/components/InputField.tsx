// src/components/InputField.tsx
import React from 'react';
import type { InputFieldProps } from '../types/Types';

export function InputField({
  id,
  name,
  label,
  placeholder,
  value,
  maxLength = 10,
  error,
  onChange,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1.5 flex-1">
      <label
        htmlFor={id}
        className={`text-[11px] font-medium uppercase tracking-wider ${
          error ? 'text-red-500' : 'text-zinc-400'
        }`}
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        className={`w-full rounded-lg border px-3 py-2 text-lg font-medium text-zinc-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-100 ${
          error
            ? 'border-red-400 focus:border-red-400'
            : 'border-zinc-200 focus:border-blue-500'
        }`}
      />
      {error && <span className="text-[10px] text-red-500">{error}</span>}
    </div>
  );
}