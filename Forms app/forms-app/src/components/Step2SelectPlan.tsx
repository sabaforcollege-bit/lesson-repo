import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../context/formContext';
import type { PlanType } from '../types/form';

import iconArcade from '../assets/icon-arcade.svg';
import iconAdvanced from '../assets/icon-advanced.svg';
import iconPro from '../assets/icon-pro.svg';

const plans: { type: PlanType; monthlyPrice: number; yearlyPrice: number; icon: string }[] = [
    { type: 'Arcade', monthlyPrice: 9, yearlyPrice: 90, icon: iconArcade },
    { type: 'Advanced', monthlyPrice: 12, yearlyPrice: 120, icon: iconAdvanced },
    { type: 'Pro', monthlyPrice: 15, yearlyPrice: 150, icon: iconPro },
];

export function Step2SelectPlan() {
    const { selectedPlan, setSelectedPlan, billingCycle, setBillingCycle } = useFormContext();
    const navigate = useNavigate();

    const handlePlanSelect = (type: PlanType, price: number) => {
        setSelectedPlan({ type, price });
    };

    const handleToggleCycle = () => {
        const nextCycle = billingCycle === 'monthly' ? 'yearly' : 'monthly';
        setBillingCycle(nextCycle);

        const currentPlanObj = plans.find((p) => p.type === selectedPlan.type);
        if (currentPlanObj) {
            const newPrice = nextCycle === 'monthly' ? currentPlanObj.monthlyPrice : currentPlanObj.yearlyPrice;
            setSelectedPlan({ type: selectedPlan.type, price: newPrice });
        }
    };

    return (
        <div className="flex flex-col h-full justify-between">
            <div>
                <h1 className="text-3xl font-bold text-slate-800">აირჩიეთ თქვენი გეგმები</h1>
                <p className="text-slate-400 mt-2 mb-6">თქვენ გაქვთ არჩევანი, თვიურ ან წლიურ გადასახადს შორის</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {plans.map((plan) => {
                        const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
                        const isSelected = selectedPlan.type === plan.type;

                        return (
                            <div
                                key={plan.type}
                                onClick={() => handlePlanSelect(plan.type, price)}
                                className={`border rounded-xl p-4 cursor-pointer transition hover:border-indigo-600 ${isSelected ? 'border-indigo-600 bg-indigo-50/30' : 'border-slate-200'
                                    }`}
                            >
                                <img src={plan.icon} alt={plan.type} className="w-10 h-10 mb-8" />
                                <h3 className="font-bold text-slate-800">{plan.type}</h3>
                                <p className="text-sm text-slate-400">${price}/{billingCycle === 'monthly' ? 'mo' : 'yr'}</p>
                                {billingCycle === 'yearly' && <p className="text-xs text-indigo-900 mt-1 font-medium">2 months free</p>}
                            </div>
                        );
                    })}
                </div>

                <div className="bg-slate-50 rounded-lg p-3 flex justify-center items-center gap-6">
                    <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-400'}`}>
                        თვიურად
                    </span>
                    <button
                        type="button"
                        onClick={handleToggleCycle}
                        className="cursor-pointer w-12 h-6 bg-slate-900 rounded-full p-1 flex items-center transition"
                    >
                        <div className={`w-4 h-4 bg-white rounded-full transition transform ${billingCycle === 'yearly' ? 'translate-x-6' : ''}`} />
                    </button>
                    <span className={`text-sm font-semibold ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-400'}`}>
                        წლიურად
                    </span>
                </div>
            </div>

            <div className="flex justify-between items-center mt-8">
                <button type="button" onClick={() => navigate('/form/info')} className="cursor-pointer text-slate-400 font-semibold hover:text-slate-900 transition">
                    უკან დაბრუნება
                </button>
                <button type="button" onClick={() => navigate('/form/addons')} className="cursor-pointer bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition">
                    შემდეგი ნაბიჯი
                </button>
            </div>
        </div>
    );
}