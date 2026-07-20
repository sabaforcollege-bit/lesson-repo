import React from 'react';
import personIcon from '../assets/icon-person.svg';

type PeopleInputProps = {
    people: number | '';
    onChange: (value: number | '') => void;
};

export const PeopleInput = ({ people, onChange }: PeopleInputProps) => {
    const isZero = people === 0;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const onlyNumbers = e.target.value.replace(/\D/g, '');

        if (onlyNumbers === '') {
            onChange('');
        } else {
            onChange(Number(onlyNumbers));
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm font-bold">
                <label htmlFor="people" className="text-slate-600">
                    ადამიანთა რაოდენობა
                </label>

                {isZero && (
                    <span className="text-red-500 text-xs font-bold">
                        ადამიანთა რაოდენობა არ შეიძლება იყოს 0
                    </span>
                )}
            </div>

            <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2">
                    <img src={personIcon} alt="Person icon" className="w-4 h-4 object-contain" />
                </span>

                <input
                    id="people"
                    type="text"
                    inputMode="numeric"
                    placeholder="0"
                    value={people}
                    onChange={handleChange}
                    className={`w-full bg-slate-100 text-right text-slate-800 font-extrabold text-2xl px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${isZero
                        ? 'border-red-500 focus:border-red-500 bg-red-50'
                        : 'border-transparent focus:border-slate-800 focus:bg-white'
                        }`}
                />
            </div>
        </div>
    );
};