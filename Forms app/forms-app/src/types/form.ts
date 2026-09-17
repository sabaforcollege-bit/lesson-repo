export interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
}

export type PlanType = 'Arcade' | 'Advanced' | 'Pro';
export type BillingCycle = 'monthly' | 'yearly';

export interface Plan {
    type: PlanType;
    price: number;
}

export interface SelectedPlan {
    type: PlanType;
    price: number;
}

export interface AddOn {
    id: string;
    title: string;
    description: string;
    price: number;
}

export interface FormContextType {
    personalInfo: PersonalInfo;
    setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>;
    selectedPlan: Plan;
    setSelectedPlan: React.Dispatch<React.SetStateAction<Plan>>;
    billingCycle: BillingCycle;
    setBillingCycle: React.Dispatch<React.SetStateAction<BillingCycle>>;
    selectedAddOns: AddOn[];
    toggleAddOn: (addOn: AddOn) => void;
}