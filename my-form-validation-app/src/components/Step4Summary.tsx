import { useOutletContext } from 'react-router-dom';
import type { FormikProps } from 'formik';
import type { FormValues } from '../types/form';

interface ContextType {
  formik: FormikProps<FormValues>;
  onGoToStep2: () => void;
}

const planPrices = {
  arcade: { monthly: 9, yearly: 90 },
  advanced: { monthly: 12, yearly: 120 },
  pro: { monthly: 15, yearly: 150 },
};

const addOnPrices = {
  onlineServices: { name: 'ონლაინ სერვისები', monthly: 1, yearly: 10 },
  largerStorage: { name: 'უფრო დიდი მოცულობა', monthly: 2, yearly: 20 },
  customizableProfile: { name: 'მორგებადი პროფილი', monthly: 2, yearly: 20 },
};

export default function Step4Summary() {
  const { formik, onGoToStep2 } = useOutletContext<ContextType>();
  const { plan, billingCycle, addOns } = formik.values;
  const isYearly = billingCycle === 'yearly';

  const basePrice = isYearly
    ? planPrices[plan].yearly
    : planPrices[plan].monthly;

  let total = basePrice;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold text-[#02295a]">დასრულება</h2>
        <p className="text-[#9699ab] text-sm mt-1">
          დადასტურებამდე შეამოწმეთ, რომ ყველაფერი რიგზეა.
        </p>
      </div>

      <div className="bg-[#fafbfc] p-4 rounded-xl flex flex-col gap-4">
        <div className="flex justify-between items-center pb-4 border-b border-[#d6d9e6]">
          <div>
            <h3 className="font-bold text-[#02295a] capitalize">
              {plan} ({billingCycle})
            </h3>
            <button
              type="button"
              onClick={onGoToStep2}
              className="text-xs text-[#9699ab] underline hover:text-[#473dff] transition-colors"
            >
              ცვლილება
            </button>
          </div>
          <span className="font-bold text-[#02295a]">
            ₾{basePrice}/{isYearly ? 'წლ' : 'თვ'}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {(Object.keys(addOns) as Array<keyof typeof addOns>).map((key) => {
            if (!addOns[key]) return null;

            const addOnInfo = addOnPrices[key];
            const price = isYearly ? addOnInfo.yearly : addOnInfo.monthly;
            total += price;

            return (
              <div key={key} className="flex justify-between items-center text-xs">
                <span className="text-[#9699ab]">{addOnInfo.name}</span>
                <span className="text-[#02295a] font-medium">
                  +₾{price}/{isYearly ? 'წლ' : 'თვ'}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center p-4">
        <span className="text-xs text-[#9699ab]">
          ჯამში (ყოველ {isYearly ? 'წელს' : 'თვეს'})
        </span>
        <span className="text-[#473dff] font-bold text-xl">
          +₾{total}/{isYearly ? 'წლ' : 'თვ'}
        </span>
      </div>
    </div>
  );
}