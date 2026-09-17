import { useLocation } from 'react-router-dom';
import bgSidebarDesktop from '../assets/bg-sidebar-desktop.svg';

const steps = [
    { number: 1, title: 'თქვენი იფორმაცია', path: '/form/info' },
    { number: 2, title: 'თქვენი გეგმა', path: '/form/plan' },
    { number: 3, title: 'დამატებები', path: '/form/addons' },
    { number: 4, title: 'შეჯამება', path: '/form/summary' },
];

export function Sidebar() {
    const location = useLocation();

    return (
        <aside
            className="w-full md:w-64 rounded-xl p-8 text-white flex md:flex-col gap-6 bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url("${bgSidebarDesktop}")` }}
        >
            {steps.map((step) => {
                const isActive =
                    location.pathname === step.path ||
                    (step.path === '/form/summary' && location.pathname === '/form/thankyou');

                return (
                    <div key={step.number} className="flex items-center gap-4">
                        <div
                            className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm border transition ${isActive
                                ? 'bg-sky-200 text-slate-900 border-sky-200'
                                : 'border-white text-white bg-transparent'
                                }`}
                        >
                            {step.number}
                        </div>
                        <div className="hidden md:block">
                            <p className="text-xs text-indigo-200 uppercase">ნაბიჯი {step.number}</p>
                            <p className="text-sm font-bold tracking-wider">{step.title}</p>
                        </div>
                    </div>
                );
            })}
        </aside>
    );
}