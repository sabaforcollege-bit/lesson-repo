import React from 'react';

type TipSelectProps = {
    selectedTip: number;
    customTip: number | '';
    onSelectTip: (tip: number) => void;
    onCustomTipChange: (tip: number | '') => void;
};

export const TipSelect = ({
    selectedTip,
    customTip,
    onSelectTip,
    onCustomTipChange,
}: TipSelectProps) => {
    const tipOptions = [5, 10, 15, 25, 50];

    const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value.replace(',', '.').replace(/[^0-9.]/g, '');

        const parts = val.split('.');
        if (parts.length > 2) {
            val = `${parts[0]}.${parts.slice(1).join('')}`;
        }

        if (val === '') {
            onCustomTipChange('');
            onSelectTip(0);
        } else if (val.endsWith('.')) {
            onCustomTipChange(val as unknown as number);
        } else {
            const numVal = Number(val);
            onCustomTipChange(numVal);
            onSelectTip(numVal);
        }
    };

    const handleOptionClick = (tip: number) => {
        onSelectTip(tip);
        onCustomTipChange('');
    };

    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-slate-600">აირჩიეთ ჩაის ფულის %</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {tipOptions.map((tip) => {
                    const isSelected = selectedTip === tip && customTip === '';
                    return (
                        <button
                            key={tip}
                            type="button"
                            onClick={() => handleOptionClick(tip)}
                            className={`py-3 rounded-xl font-extrabold text-xl transition-all duration-200 ${isSelected
                                    ? 'bg-emerald-400 text-slate-900 shadow-md scale-105'
                                    : 'bg-slate-800 text-white hover:bg-slate-700 hover:text-emerald-400'
                                }`}
                        >
                            {tip}%
                        </button>
                    );
                })}
                <input
                    type="text"
                    inputMode="decimal"
                    placeholder="Custom"
                    value={customTip}
                    onChange={handleCustomChange}
                    className="w-full bg-slate-100 text-center text-slate-800 font-extrabold text-xl px-2 py-3 rounded-xl border-2 border-transparent focus:border-slate-800 focus:bg-white focus:outline-none transition-all duration-200 placeholder:text-slate-500 placeholder:font-bold"
                />
            </div>
        </div>
    );
};