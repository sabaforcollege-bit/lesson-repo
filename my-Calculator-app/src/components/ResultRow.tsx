import React from 'react';
import type { ResultRowProps } from '../types/Types';

export function ResultRow({ label, value }: ResultRowProps) {
  return (
    <div className="flex justify-between items-center bg-zinc-50/50 rounded-xl px-4 py-3 border border-zinc-100">
      <span className="text-sm font-medium text-zinc-500">{label}</span>
      <span className="text-2xl font-semibold text-blue-600">{value}</span>
    </div>
  );
}