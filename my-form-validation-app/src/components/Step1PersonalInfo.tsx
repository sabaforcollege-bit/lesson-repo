import { useOutletContext } from 'react-router-dom';
import type { FormikProps } from 'formik';
import type { FormValues } from '../types/form';
import Input from './Input';

interface ContextType {
  formik: FormikProps<FormValues>;
}

export default function Step1PersonalInfo() {
  const { formik } = useOutletContext<ContextType>();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold text-[#02295a]">პერსონალური ინფორმაცია</h2>
        <p className="text-[#9699ab] text-sm mt-1">
          გთხოვთ, მიუთითოთ თქვენი სახელი, ელფოსტის მისამართი და ტელეფონის ნომერი.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Input
          label="სახელი"
          name="name"
          placeholder="მაგალითად: დავით ადამია"
          formik={formik}
        />

        <Input
          label="ემაილის მისამართი"
          name="email"
          type="email"
          placeholder="მაგალითად: davitadamia@gmail.com"
          formik={formik}
        />

        <Input
          label="ტელეფონის ნომერი"
          name="phone"
          placeholder="მაგალითად: +995 00 00 00"
          formik={formik}
        />
      </div>
    </div>
  );
}