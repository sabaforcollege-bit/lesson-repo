import type { FormikProps } from 'formik';
import type { FormValues } from '../types/form';

interface InputProps {
  label: string;
  name: keyof FormValues;
  type?: string;
  placeholder?: string;
  formik: FormikProps<FormValues>;
}

export default function Input({ label, name, type = 'text', placeholder, formik }: InputProps) {
  const hasError = formik.touched[name] && formik.errors[name];

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between text-xs font-medium">
        <label className="text-[#02295a] font-medium">{label}</label>
        {hasError && (
          <span className="text-[#ed3548] font-bold">
            {formik.errors[name] as string}
          </span>
        )}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        {...formik.getFieldProps(name)}
        className={`border rounded-lg p-3 text-[#02295a] font-medium outline-none focus:border-[#473dff] transition-colors ${
          hasError ? 'border-[#ed3548]' : 'border-[#d6d9e6]'
        }`}
      />
    </div>
  );
}