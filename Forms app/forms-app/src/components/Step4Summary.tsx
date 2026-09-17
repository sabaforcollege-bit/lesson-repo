import { useNavigate, Link } from 'react-router-dom';
import { useFormContext } from '../context/formContext';

export function Step4Summary() {
    const { selectedPlan, selectedAddOns, billingCycle } = useFormContext();
    const navigate = useNavigate();

    const isYearly = billingCycle === 'yearly';

    const addOnsTotal = selectedAddOns.reduce((acc, curr) => {
        const price = isYearly ? curr.price * 10 : curr.price;
        return acc + price;
    }, 0);

    const totalPrice = selectedPlan.price + addOnsTotal;

    return (
        <div className="flex flex-col h-full justify-between">
            <div>
                <h1 className="text-3xl font-bold text-slate-800">დასრულება</h1>
                <p className="text-slate-400 mt-2 mb-6">ორმაგი გადამოწმება იმისთვის რომ დავადასტუროთ ყველაფერი რიგზე არის თუ არა.</p>

                <div className="bg-slate-50 rounded-xl p-6 mb-6">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                        <div>
                            <h3 className="font-bold text-slate-800">{selectedPlan.type} ({isYearly ? 'წლიურად' : 'თვიურად'})</h3>
                            <Link
                                to="/form/step2"
                                className="text-slate-400 underline text-sm hover:text-indigo-600 transition"
                            >
                                შეცვლა
                            </Link>
                        </div>
                        <span className="font-bold text-slate-800">${selectedPlan.price}/{isYearly ? 'წლ' : 'თვ'}</span>
                    </div>

                    <div className="space-y-3 mt-4">
                        {selectedAddOns.map((addon) => {
                            const price = isYearly ? addon.price * 10 : addon.price;

                            return (
                                <div key={addon.id} className="flex justify-between text-sm">
                                    <span className="text-slate-400">{addon.title}</span>
                                    <span className="text-slate-700 font-medium">+${price}/{isYearly ? 'წლ' : 'თვ'}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="flex justify-between items-center px-6">
                    <span className="text-slate-400 text-sm">ჯამში (ყოველ {isYearly ? 'წელს' : 'თვე'})</span>
                    <span className="text-indigo-600 font-bold text-xl">+${totalPrice}/{isYearly ? 'წლ' : 'თვ'}</span>
                </div>
            </div>

            <div className="flex justify-between items-center mt-8">
                <button type="button" onClick={() => navigate('/form/addons')} className="cursor-pointer text-slate-400 font-semibold hover:text-slate-900 transition">
                    უკან დაბრუნება
                </button>
                <button type="button" onClick={() => navigate('/form/thankyou')} className="cursor-pointer bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition font-medium">
                    დადასტურება
                </button>
            </div>
        </div>
    );
}