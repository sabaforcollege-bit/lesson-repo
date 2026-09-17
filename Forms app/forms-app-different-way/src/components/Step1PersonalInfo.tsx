import { useState, useRef, type FormEvent } from 'react';
import { useFormContext } from '../context/FormContext';

interface Step1Props {
    onNext: () => void;
}

export function Step1PersonalInfo({ onNext }: Step1Props) {
    const { personalInfo, setPersonalInfo } = useFormContext();
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const nameInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const phoneInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const newErrors: { [key: string]: string } = {};

        if (!personalInfo.name.trim()) {
            newErrors.name = 'This field is required';
            nameInputRef.current?.focus();
        } else if (!personalInfo.email.trim()) {
            newErrors.email = 'This field is required';
            emailInputRef.current?.focus();
        } else if (!personalInfo.phone.trim()) {
            newErrors.phone = 'This field is required';
            phoneInputRef.current?.focus();
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between">
            <div>
                <h1 className="text-3xl font-bold text-slate-800">Personal info</h1>
                <p className="text-slate-400 mt-2 mb-6">Please provide your name, email address, and phone number.</p>

                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <label className="text-slate-700 font-medium">Name</label>
                            {errors.name && <span className="text-red-500 font-semibold">{errors.name}</span>}
                        </div>
                        <input
                            ref={nameInputRef}
                            type="text"
                            placeholder="e.g. Stephen King"
                            value={personalInfo.name}
                            onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
                            className={`w-full border rounded-lg p-3 outline-none focus:border-indigo-600 ${errors.name ? 'border-red-500' : 'border-slate-300'
                                }`}
                        />
                    </div>

                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <label className="text-slate-700 font-medium">Email Address</label>
                            {errors.email && <span className="text-red-500 font-semibold">{errors.email}</span>}
                        </div>
                        <input
                            ref={emailInputRef}
                            type="email"
                            placeholder="e.g. stephenking@lorem.com"
                            value={personalInfo.email}
                            onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                            className={`w-full border rounded-lg p-3 outline-none focus:border-indigo-600 ${errors.email ? 'border-red-500' : 'border-slate-300'
                                }`}
                        />
                    </div>

                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <label className="text-slate-700 font-medium">Phone Number</label>
                            {errors.phone && <span className="text-red-500 font-semibold">{errors.phone}</span>}
                        </div>
                        <input
                            ref={phoneInputRef}
                            type="tel"
                            placeholder="e.g. +1 234 567 890"
                            value={personalInfo.phone}
                            onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
                            className={`w-full border rounded-lg p-3 outline-none focus:border-indigo-600 ${errors.phone ? 'border-red-500' : 'border-slate-300'
                                }`}
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-end mt-8">
                <button type="submit" className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition">
                    Next Step
                </button>
            </div>
        </form>
    );
}