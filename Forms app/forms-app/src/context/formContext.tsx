import { createContext, useContext, useState, type ReactNode } from 'react';
import type { PersonalInfo, SelectedPlan, AddOn, BillingCycle } from '../types/form';

// initial states
const initialPersonalInfo: PersonalInfo = { name: '', email: '', phone: '' };
const initialPlan: SelectedPlan = { type: 'Arcade', price: 9 };

interface FormContextType {
    personalInfo: PersonalInfo;
    setPersonalInfo: (info: PersonalInfo) => void;
    selectedPlan: SelectedPlan;
    setSelectedPlan: (plan: SelectedPlan) => void;
    selectedAddOns: AddOn[];
    toggleAddOn: (addon: AddOn) => void;
    billingCycle: BillingCycle;
    setBillingCycle: (cycle: BillingCycle) => void;
    resetForm: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(initialPersonalInfo);
    const [selectedPlan, setSelectedPlan] = useState<SelectedPlan>(initialPlan);
    const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);
    const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

    const toggleAddOn = (addon: AddOn) => {
        setSelectedAddOns((prev) =>
            prev.some((item) => item.id === addon.id)
                ? prev.filter((item) => item.id !== addon.id)
                : [...prev, addon]
        );
    };

    const resetForm = () => {
        setPersonalInfo(initialPersonalInfo);
        setSelectedPlan(initialPlan);
        setSelectedAddOns([]);
        setBillingCycle('monthly');
    };

    return (
        <FormContext.Provider
            value={{
                personalInfo,
                setPersonalInfo,
                selectedPlan,
                setSelectedPlan,
                selectedAddOns,
                toggleAddOn,
                billingCycle,
                setBillingCycle,
                resetForm,
            }}
        >
            {children}
        </FormContext.Provider>
    );
}

export function useFormContext() {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within a FormProvider');
    }
    return context;
}