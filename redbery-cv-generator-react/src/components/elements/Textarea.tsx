import type { FieldProps } from 'formik';

interface TextareaProps extends FieldProps {
    label: string;
    hint?: string;
    placeholder?: string;
    rows?: number;
}

export function Textarea({ field, form, label, hint, placeholder, rows = 4 }: TextareaProps) {
    const isError = Boolean(form.touched[field.name] && form.errors[field.name]);

    return (
        <div className="flex flex-col gap-1 w-full">
            <label className="text-sm font-bold text-gray-800">{label}</label>
            <div className="relative">
                <textarea
                    {...field}
                    rows={rows}
                    placeholder={placeholder}
                    className={`w-full p-3 border rounded-md outline-none resize-y transition-colors ${isError ? 'border-red-500' : 'border-gray-300 focus:border-purple-500'
                        }`}
                />
                {isError && (
                    <span className="absolute right-3 top-3 text-red-500 font-bold">
                        !
                    </span>
                )}
            </div>
            {hint && <span className="text-xs text-gray-500">{hint}</span>}
        </div>
    );
}