import React from 'react';

export interface DateInput {
  day: string;
  month: string;
  year: string;
}

export interface AgeResult {
  years: number | '--';
  months: number | '--';
  days: number | '--';
}

export interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  maxLength?: number;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ResultRowProps {
  label: string;
  value: number | '--';
}