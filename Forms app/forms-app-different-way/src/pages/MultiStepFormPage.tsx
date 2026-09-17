import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { Step1PersonalInfo } from '../components/Step1PersonalInfo';
import { Step2SelectPlan } from '../components/Step2SelectPlan';
import { Step3AddOns } from '../components/Step3AddOns';
import { Step4Summary } from '../components/Step4Summary';
import { Step5ThankYou } from '../components/Step5ThankYou';

export function MultiStepFormPage() {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const navigate = useNavigate();

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
    const goToStep = (stepNumber: number) => setCurrentStep(stepNumber);

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-4xl mb-4 flex justify-between items-center">
                <button
                    onClick={() => navigate('/')}
                    className="text-slate-500 hover:text-slate-800 font-medium text-sm flex items-center gap-1"
                >
                    ← Back to Home
                </button>
            </div>

            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg flex flex-col md:flex-row w-full max-w-4xl min-h-[550px]">
                <Sidebar currentStep={currentStep} />

                <div className="flex-1 px-4 md:px-12 py-6 flex flex-col justify-between">
                    {currentStep === 1 && <Step1PersonalInfo onNext={nextStep} />}
                    {currentStep === 2 && <Step2SelectPlan onNext={nextStep} onPrev={prevStep} />}
                    {currentStep === 3 && <Step3AddOns onNext={nextStep} onPrev={prevStep} />}
                    {currentStep === 4 && <Step4Summary onNext={nextStep} onPrev={prevStep} onGoToStep={goToStep} />}
                    {currentStep === 5 && <Step5ThankYou />}
                </div>
            </div>
        </div>
    );
}