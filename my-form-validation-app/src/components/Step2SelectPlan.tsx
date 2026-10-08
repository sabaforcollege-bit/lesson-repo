import { useOutletContext } from 'react-router-dom';
import type { FormikProps } from 'formik';
import type { FormValues } from '../types/form';

import iconArcade from '../assets/icon-arcade.svg';
import iconAdvanced from '../assets/icon-advanced.svg';
import iconPro from '../assets/icon-pro.svg';

interface ContextType {
  formik: FormikProps<FormValues>;
}

const plans = [
  {
    id: 'arcade',
    title: 'arcade',
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: iconArcade,
  },
  {
    id: 'advanced',
    title: 'advanced',
    monthlyPrice: 12,
    yearlyPrice: 120,
    icon: iconAdvanced,
  },
  {
    id: 'pro',
    title: 'pro',
    monthlyPrice: 15,
    yearlyPrice: 150,
    icon: iconPro,
  },
] as const;

export default function Step2SelectPlan() {
  const { formik } = useOutletContext<ContextType>();
  const isYearly = formik.values.billingCycle === 'yearly';

  const handleToggleBilling = () => {
    formik.setFieldValue('billingCycle', isYearly ? 'monthly' : 'yearly');
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold text-[#02295a]">აირჩიეთ თქვენი გეგმა</h2>
        <p className="text-[#9699ab] text-sm mt-1">
          თქვენ გაქვთ ყოველთვიური ან ყოველწლიური გადახდის არჩევის შესაძლებლობა.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan) => {
          const isSelected = formik.values.plan === plan.id;
          const price = isYearly
            ? `₾${plan.yearlyPrice}/წლ`
            : `₾${plan.monthlyPrice}/თვ`;

          return (
            <div
              key={plan.id}
              onClick={() => formik.setFieldValue('plan', plan.id)}
              className={`border rounded-xl p-4 cursor-pointer flex md:flex-col justify-start md:justify-between items-start gap-4 transition-all ${
                isSelected
                  ? 'border-[#473dff] bg-[#fafbfc]'
                  : 'border-[#d6d9e6] hover:border-[#473dff]'
              }`}
            >
              <img src={plan.icon} alt={plan.title} className="w-10 h-10" />
              <div>
                <h3 className="font-bold text-[#02295a]">{plan.title}</h3>
                <p className="text-[#9699ab] text-sm">{price}</p>
                {isYearly && (
                  <p className="text-[#02295a] text-xs font-medium mt-1">
                    2 თვე უფასოდ
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-[#fafbfc] rounded-lg p-3 flex items-center justify-center gap-6 mt-2">
        <span
          className={`text-sm font-bold ${
            !isYearly ? 'text-[#02295a]' : 'text-[#9699ab]'
          }`}
        >
          თვიურად
        </span>
        <button
          type="button"
          onClick={handleToggleBilling}
          className="w-12 h-6 bg-[#02295a] rounded-full p-1 relative transition-colors focus:outline-none cursor-pointer"
        >
          <div
            className={`w-4 h-4 bg-white rounded-full transition-transform ${
              isYearly ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
        <span
          className={`text-sm font-bold ${
            isYearly ? 'text-[#02295a]' : 'text-[#9699ab]'
          }`}
        >
          წლიურად
        </span>
      </div>
    </div>
  );
}