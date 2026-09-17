interface SidebarProps {
    currentStep: number;
}

const steps = [
    { number: 1, title: 'YOUR INFO' },
    { number: 2, title: 'SELECT PLAN' },
    { number: 3, title: 'ADD-ONS' },
    { number: 4, title: 'SUMMARY' },
];

export function Sidebar({ currentStep }: SidebarProps) {
    return (
        <aside className="w-full md:w-64 bg-indigo-600 rounded-xl p-8 text-white flex md:flex-col gap-6">
            {steps.map((step) => {
                const isActive = currentStep === step.number || (step.number === 4 && currentStep === 5);
                return (
                    <div key={step.number} className="flex items-center gap-4">
                        <div
                            className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm border ${isActive ? 'bg-sky-200 text-slate-900 border-sky-200' : 'border-white text-white'
                                }`}
                        >
                            {step.number}
                        </div>
                        <div className="hidden md:block">
                            <p className="text-xs text-indigo-200 uppercase">STEP {step.number}</p>
                            <p className="text-sm font-bold tracking-wider">{step.title}</p>
                        </div>
                    </div>
                );
            })}
        </aside>
    );
}