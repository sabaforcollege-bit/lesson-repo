import { useFormContext } from '../context/FormContext';

interface Step3Props {
    onNext: () => void;
    onPrev: () => void;
}

const availableAddOns = [
    { id: '1', title: 'Online service', description: 'Access to multiplayer games', price: 1 },
    { id: '2', title: 'Larger storage', description: 'Extra 1TB of cloud save', price: 2 },
    { id: '3', title: 'Customizable Profile', description: 'Custom theme on your profile', price: 2 },
];

export function Step3AddOns({ onNext, onPrev }: Step3Props) {
    const { selectedAddOns, toggleAddOn, billingCycle } = useFormContext();

    return (
        <div className="flex flex-col h-full justify-between">
            <div>
                <h1 className="text-3xl font-bold text-slate-800">Pick add-ons</h1>
                <p className="text-slate-400 mt-2 mb-6">Add-ons help enhance your gaming experience.</p>

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
                                    <input type="checkbox" checked={isChecked} readOnly className="w-5 h-5 accent-indigo-600 cursor-pointer" />
                                    <div>
                                        <h3 className="font-bold text-slate-800">{addon.title}</h3>
                                        <p className="text-sm text-slate-400">{addon.description}</p>
                                    </div>
                                </div>
                                <span className="text-indigo-600 text-sm font-semibold">
                                    +${displayPrice}/{billingCycle === 'monthly' ? 'mo' : 'yr'}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-between items-center mt-8">
                <button type="button" onClick={onPrev} className="text-slate-400 font-semibold hover:text-slate-900 transition">
                    Go Back
                </button>
                <button type="button" onClick={onNext} className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition">
                    Next Step
                </button>
            </div>
        </div>
    );
}