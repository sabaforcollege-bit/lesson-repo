import { useState } from 'react';
import { BillInput } from '../elements/BillInput';
import { TipSelect } from '../elements/TipSelect';
import { PeopleInput } from '../elements/PeopleInput';
import { DisplayResult } from '../elements/DisplayResult';

export const CalculatorPage = () => {
    const [bill, setBill] = useState<number | ''>('');
    const [tipPercentage, setTipPercentage] = useState<number>(0);
    const [customTip, setCustomTip] = useState<number | ''>('');
    const [people, setPeople] = useState<number | ''>('');

    const numericBill = Number(bill) || 0;
    const numericPeople = Number(people) || 0;

    let tipAmountPerPerson = 0;
    let totalPerPerson = 0;

    if (numericBill > 0 && numericPeople > 0) {
        const totalTip = numericBill * (tipPercentage / 100);
        tipAmountPerPerson = totalTip / numericPeople;
        totalPerPerson = (numericBill + totalTip) / numericPeople;
    }

    const handleReset = () => {
        setBill('');
        setTipPercentage(0);
        setCustomTip('');
        setPeople('');
    };

    const canReset = bill !== '' || people !== '' || tipPercentage !== 0;

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-slate-100 py-10 px-4 flex flex-col justify-center items-center">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="flex flex-col gap-6 justify-between">
                    <BillInput bill={bill} onChange={setBill} />
                    <TipSelect
                        selectedTip={tipPercentage}
                        customTip={customTip}
                        onSelectTip={setTipPercentage}
                        onCustomTipChange={setCustomTip}
                    />
                    <PeopleInput people={people} onChange={setPeople} />
                </div>

                <DisplayResult
                    tipAmountPerPerson={tipAmountPerPerson}
                    totalPerPerson={totalPerPerson}
                    onReset={handleReset}
                    canReset={canReset}
                />
            </div>
        </div>
    );
};