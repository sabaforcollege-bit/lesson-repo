import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../state/store';
import { useNavigate } from 'react-router-dom';

const ResultPage = () => {
    const user = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">თქვენი ინფორმაცია</h2>

                <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                    <p className="text-slate-700">
                        <span className="font-semibold text-slate-900">სახელი:</span> {user.firstName || 'არ არის მითითებული'}
                    </p>
                    <p className="text-slate-700">
                        <span className="font-semibold text-slate-900">გვარი:</span> {user.lastName || 'არ არის მითითებული'}
                    </p>
                    <p className="text-slate-700">
                        <span className="font-semibold text-slate-900">ტელეფონი:</span> {user.phone || 'არ არის მითითებული'}
                    </p>
                </div>

                <button
                    onClick={() => navigate('/')}
                    className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium py-2.5 rounded-xl transition duration-200 shadow-sm cursor-pointer"
                >
                    დაბრუნება
                </button>
            </div>
        </div>
    );
};

export default ResultPage;