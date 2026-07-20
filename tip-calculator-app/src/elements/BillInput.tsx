import React from 'react';
import dollarIcon from '../assets/icon-dollar.svg';

type BillInputProps = {
    bill: number | '';
    onChange: (value: number | '') => void;
};

export const BillInput = ({ bill, onChange }: BillInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value.replace(',', '.').replace(/[^0-9.]/g, '');

        const parts = val.split('.');
        if (parts.length > 2) {
            val = `${parts[0]}.${parts.slice(1).join('')}`;
        }

        if (val === '') {
            onChange('');
        } else if (val.endsWith('.')) {
            onChange(val as unknown as number);
        } else {
            onChange(Number(val));
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="bill" className="text-sm font-bold text-slate-600">
                გადასახადი
            </label>
            <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2">
                    <img src={dollarIcon} alt="Dollar icon" className="w-3.5 h-4 object-contain" />
                </span>

                <input
                    id="bill"
                    type="text"
                    inputMode="decimal"
                    placeholder="0.00"
                    value={bill}
                    onChange={handleChange}
                    className="w-full bg-slate-100 text-right text-slate-800 font-extrabold text-2xl px-4 py-3 rounded-xl border-2 border-transparent focus:border-slate-800 focus:bg-white focus:outline-none transition-all duration-200"
                />
            </div>
        </div>
    );
};