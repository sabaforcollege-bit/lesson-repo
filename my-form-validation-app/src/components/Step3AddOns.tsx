import { useOutletContext } from 'react-router-dom';
import type { FormikProps } from 'formik';
import type { FormValues } from '../types/form';

interface ContextType {
  formik: FormikProps<FormValues>;
}

const addOnsList = [
  {
    id: 'onlineServices' as const,
    title: 'ონლაინ სერვისი',
    description: 'მულტიფლეიერ თამაშებზე წვდომა',
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: 'largerStorage' as const,
    title: 'უფრო დიდი მოცულობა',
    description: 'ღრუბლოვან საცავში დამატებითი 1 ტბ',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: 'customizableProfile' as const,
    title: 'მორგებადი პროფილი',
    description: 'მორგებული თემა თქვენს პროფილზე',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

export default function Step3AddOns() {
  const { formik } = useOutletContext<ContextType>();
  const isYearly = formik.values.billingCycle === 'yearly';

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold text-[#02295a]">შეარჩიეთ დამატებები</h2>
        <p className="text-[#9699ab] text-sm mt-1">
          დამატებები თქვენს სათამაშო გამოცდილებას აუმჯობესებს.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {addOnsList.map((addon) => {
          const isChecked = formik.values.addOns[addon.id];
          const price = isYearly
            ? `+₾${addon.yearlyPrice}/წლ`
            : `+₾${addon.monthlyPrice}/თვ`;

          return (
            <label
              key={addon.id}
              className={`border rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all ${
                isChecked
                  ? 'border-[#473dff] bg-[#fafbfc]'
                  : 'border-[#d6d9e6] hover:border-[#473dff]'
              }`}
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  name={`addOns.${addon.id}`}
                  checked={isChecked}
                  onChange={formik.handleChange}
                  className="w-5 h-5 accent-[#473dff] rounded cursor-pointer"
                />
                <div>
                  <h3 className="font-bold text-[#02295a] text-sm">
                    {addon.title}
                  </h3>
                  <p className="text-[#9699ab] text-xs">{addon.description}</p>
                </div>
              </div>
              <span className="text-[#473dff] font-medium text-xs">
                {price}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}