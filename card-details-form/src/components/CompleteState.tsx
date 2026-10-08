import iconComplete from '../assets/icon-complete.svg';
import { Button } from './ui/Button';

interface CompleteStateProps {
    onReset: () => void;
}

export function CompleteState({ onReset }: CompleteStateProps) {
    return (
        <div className="flex flex-col items-center text-center gap-6 w-full max-w-[380px]">
            <img src={iconComplete} alt="Complete Icon" className="w-20 h-20" />
            <div className="space-y-2">
                <h2 className="text-3xl font-medium tracking-widest text-[#21092F] uppercase">
                    მადლობა!
                </h2>
                <p className="text-gray-400">თქვენი ბარათის მონაცემები დამატებულია</p>
            </div>
            <Button onClick={onReset}>გაგრძელება</Button>
        </div>
    );
}