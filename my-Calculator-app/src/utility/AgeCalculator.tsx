// src/utils/ageCalculator.ts
import type { DateInput, AgeResult } from '../types/Types';

export const calculateAge = (birthDate: DateInput): AgeResult => {
  const inputDay = parseInt(birthDate.day);
  const inputMonth = parseInt(birthDate.month);
  const inputYear = parseInt(birthDate.year);

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  const years = Math.abs(currentYear - inputYear);
  const months = Math.abs(inputMonth - currentMonth);
  const days = Math.abs(inputDay - currentDay);

  return { years, months, days };
};