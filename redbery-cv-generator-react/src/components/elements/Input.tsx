import type { FieldProps } from 'formik';

interface InputProps extends FieldProps {
    label: string;
    hint?: string;
    placeholder?: string;
    type?: string;
}

export function Input({ field, form, label, hint, placeholder, type = 'text' }: InputProps) {
    const isError = Boolean(form.touched[field.name] && form.errors[field.name]);

    return (
        <div className="flex flex-col gap-1 w-full">
            <label className="text-sm font-bold text-gray-800">{label}</label>
            <div className="relative">
                <input
                    {...field}
                    type={type}
                    placeholder={placeholder}
                    className={`w-full p-3 border rounded-md outline-none transition-colors ${isError ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                        }`}
                />
                {isError && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 font-bold">
                        !
                    </span>
                )}
            </div>
            {hint && <span className="text-xs text-gray-500">{hint}</span>}
        </div>
    );
}