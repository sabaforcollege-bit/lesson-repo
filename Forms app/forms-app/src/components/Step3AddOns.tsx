import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../context/formContext';
import iconCheckmark from '../assets/icon-checkmark.svg';

const availableAddOns = [
    { id: '1', title: 'ონლაინ მომსახურება', description: 'მულტიფლეიერ თამაშებზე წვდომა', price: 1 },
    { id: '2', title: 'დიდი საცავი', description: 'დამატებითი 1TB მეხსიერება თქვენს ღრუბლოვან საცავში ', price: 2 },
    { id: '3', title: 'მორგებადი პროფილი', description: 'თქვენს პროფილზე მორგებული თემა', price: 2 },
];

export function Step3AddOns() {
    const { selectedAddOns, toggleAddOn, billingCycle } = useFormContext();
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-full justify-between">
            <div>
                <h1 className="text-3xl font-bold text-slate-800">აირჩიეთ დამატებები</h1>
                <p className="text-slate-400 mt-2 mb-6">დამატებები გეხმარებათ რომ გააუმჯობესოთ თქვენუ გეიმინგ გამოცდილება</p>

                <div className="space-y-4">
                    {availableAddOns.map((addon) => {
                        const isChecked = selectedAddOns.some((item) => item.id === addon.id);
                        const displayPrice = billingCycle === 'yearly' ? addon.price * 10 : addon.price;

                        return (
                            <div
                                key={addon.id}
                                onClick={() => toggleAddOn(addon)}
                                className={`border rounded-xl p-4 flex items-center justify-between cursor-pointer transition hover:border-indigo-600 ${isChecked ? 'border-indigo-600 bg-indigo-50/30' : 'border-slate-200'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-5 h-5 rounded border flex items-center justify-center ${isChecked ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300'}`}>
                                        {isChecked && <img src={iconCheckmark} alt="checked" className="w-3 h-3" />}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800">{addon.title}</h3>
                                        <p className="text-sm text-slate-400">{addon.description}</p>
                                    </div>
                                </div>
                                <span className="text-indigo-600 text-sm font-semibold">
                                    +${displayPrice}/{billingCycle === 'monthly' ? 'თვ' : 'წლ'}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-between items-center mt-8">
                <button type="button" onClick={() => navigate('/form/plan')} className="cursor-pointer text-slate-400 font-semibold hover:text-slate-900 transition">
                    უკან დაბრუნება
                </button>
                <button type="button" onClick={() => navigate('/form/summary')} className="cursor-pointer bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition">
                    შემდეგი ნაბიჯი
                </button>
            </div>
        </div>
    );
}