import React, { useState } from 'react';
import type { FormEvent } from 'react';
import type { DateInput, AgeResult } from '../types/Types';
import { calculateAge } from '../utility/AgeCalculator';
import { InputField } from './InputField';
import { ResultRow } from './ResultRow';

export function AgeCalculatorForm() {
  const [formData, setFormData] = useState<DateInput>({
    day: '',
    month: '',
    year: '',
  });

  const [errors, setErrors] = useState<{ [key in keyof DateInput]?: string }>({});

  const [result, setResult] = useState<AgeResult>({
    years: '--',
    months: '--',
    days: '--',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof DateInput]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newErrors: { [key in keyof DateInput]?: string } = {};
    if (!formData.day) newErrors.day = 'Required';
    if (!formData.month) newErrors.month = 'Required';
    if (!formData.year) newErrors.year = 'Required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setResult({ years: '--', months: '--', days: '--' });
      return;
    }

    const calculated = calculateAge(formData);
    setResult(calculated);
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-zinc-200/80 bg-white p-8">
      {/* სათაური */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-zinc-800">Age Calculator</h1>
        <p className="text-xs text-zinc-400 mt-1">Enter your birth date to calculate your exact age.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <InputField
            id="day"
            name="day"
            label="Day"
            placeholder="e.g. 24"
            value={formData.day}
            maxLength={5}
            error={errors.day}
            onChange={handleChange}
          />
          <InputField
            id="month"
            name="month"
            label="Month"
            placeholder="e.g. 9"
            value={formData.month}
            maxLength={5}
            error={errors.month}
            onChange={handleChange}
          />
          <InputField
            id="year"
            name="year"
            label="Year"
            placeholder="e.g. 1984"
            value={formData.year}
            maxLength={4}
            error={errors.year}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-zinc-900 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 active:bg-zinc-950"
        >
          Calculate Age
        </button>
      </form>

      <hr className="my-6 border-zinc-100" />

      <div className="flex flex-col gap-3">
        <ResultRow label="Years" value={result.years} />
        <ResultRow label="Months" value={result.months} />
        <ResultRow label="Days" value={result.days} />
      </div>
    </div>
  );
}