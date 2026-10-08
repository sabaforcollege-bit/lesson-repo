import { useState } from 'react';
import { CardPreviewSection } from '../components/CardPreviewSection';
import { CardForm } from '../components/CardForm';
import { CompleteState } from '../components/CompleteState';
import type { CardFormValues } from '../types/card';

const initialFormValues: CardFormValues = {
    name: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvc: '',
};

export function CardPage() {
    const [formValues, setFormValues] = useState<CardFormValues>(initialFormValues);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleReset = () => {
        setFormValues(initialFormValues);
        setIsSubmitted(false);
    };

    return (
        <main className="min-h-screen flex flex-col lg:flex-row items-center justify-between bg-white font-sans">
            <CardPreviewSection {...formValues} />
            <div className="flex-1 flex justify-center items-center p-6 lg:p-0 mt-12 lg:mt-0">
                {!isSubmitted ? (
                    <CardForm
                        initialValues={formValues}
                        onChangeValues={setFormValues}
                        onSuccess={() => setIsSubmitted(true)}
                    />
                ) : (
                    <CompleteState onReset={handleReset} />
                )}
            </div>
        </main>
    );
}