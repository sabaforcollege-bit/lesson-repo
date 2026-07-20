type DisplayResultProps = {
    tipAmountPerPerson: number;
    totalPerPerson: number;
    onReset: () => void;
    canReset: boolean;
};

export const DisplayResult = ({
    tipAmountPerPerson,
    totalPerPerson,
    onReset,
    canReset,
}: DisplayResultProps) => {
    return (
        <div className="bg-slate-800 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-8 shadow-lg">
            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-bold text-sm text-slate-100">ჩაის ფულის რაოდენობა</p>
                        <p className="text-xs text-slate-400 font-medium">/ ადამიანი</p>
                    </div>
                    <p className="text-4xl sm:text-5xl font-extrabold text-emerald-400 tracking-tight">
                        ${tipAmountPerPerson.toFixed(2)}
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-bold text-sm text-slate-100">ჯამი</p>
                        <p className="text-xs text-slate-400 font-medium">/ ადამიანი</p>
                    </div>
                    <p className="text-4xl sm:text-5xl font-extrabold text-emerald-400 tracking-tight">
                        ${totalPerPerson.toFixed(2)}
                    </p>
                </div>
            </div>

            <button
                type="button"
                onClick={onReset}
                disabled={!canReset}
                className={`w-full py-3.5 rounded-xl font-extrabold text-lg uppercase tracking-wider transition-all duration-200 ${canReset
                    ? 'bg-emerald-400 text-slate-900 hover:bg-emerald-300 shadow-md active:scale-95'
                    : 'bg-slate-700 text-slate-500 cursor-not-allowed opacity-50'
                    }`}
            >
                გადატვირთვა
            </button>
        </div>
    );
};