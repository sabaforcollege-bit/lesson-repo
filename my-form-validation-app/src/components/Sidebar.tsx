import { useLocation } from 'react-router-dom';
import sidebarBg from '../assets/bg-sidebar-desktop.svg';

const steps = [
  { number: 1, title: 'თქვენი ინფორმაცია', path: '/your-info' },
  { number: 2, title: 'შეარჩიეთ გეგმები', path: '/select-plan' },
  { number: 3, title: 'დამატებები', path: '/add-ons' },
  { number: 4, title: 'შეჯამება', path: '/summary' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside
      className="p-8 rounded-xl md:w-[274px] w-full flex md:flex-col justify-center md:justify-start gap-6 bg-cover bg-no-repeat bg-bottom shrink-0 overflow-hidden"
      style={{ backgroundImage: `url("${sidebarBg}")` }}
    >
      {steps.map((step) => {
        const isActive = location.pathname === step.path;

        return (
          <div key={step.number} className="flex items-center gap-4">
            <div
              className={`w-9 h-9 rounded-full border flex items-center justify-center font-bold text-sm transition-colors ${
                isActive
                  ? 'bg-[#bfe2fd] border-[#bfe2fd] text-[#02295a]'
                  : 'border-white text-white'
              }`}
            >
              {step.number}
            </div>
            <div className="hidden md:block">
              <p className="text-[12px] text-[#abb8c3] uppercase font-normal">
                ნაბიჯი {step.number}
              </p>
              <p className="text-[14px] font-bold tracking-wider text-white">
                {step.title}
              </p>
            </div>
          </div>
        );
      })}
    </aside>
  );
}