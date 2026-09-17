import { createContext, useContext, useState, type ReactNode } from 'react';
import type { FormContextType, PersonalInfo, Plan, BillingCycle, AddOn } from '../types/form';

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({ name: '', email: '', phone: '' });
    const [selectedPlan, setSelectedPlan] = useState<Plan>({ type: 'Arcade', price: 9 });
    const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
    const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);

    const toggleAddOn = (addOn: AddOn) => {
        setSelectedAddOns((prev) =>
            prev.some((item) => item.id === addOn.id)
                ? prev.filter((item) => item.id !== addOn.id)
                : [...prev, addOn]
        );
    };

    return (
        <FormContext.Provider
            value={{
                personalInfo,
                setPersonalInfo,
                selectedPlan,
                setSelectedPlan,
                billingCycle,
                setBillingCycle,
                selectedAddOns,
                toggleAddOn,
            }}
        >
            {children}
        </FormContext.Provider>
    );
}

export function useFormContext() {
    const context = useContext(FormContext);
    if (!context) throw new Error('useFormContext must be used within FormProvider');
    return context;
}