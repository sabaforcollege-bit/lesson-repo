export interface PlanOption {
  id: 'arcade' | 'advanced' | 'pro';
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  icon: string;
}

export interface AddOnOption {
  id: 'onlineServices' | 'largerStorage' | 'customizableProfile';
  title: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

export interface FormValues {
  name: string;
  email: string;
  phone: string;
  billingCycle: 'monthly' | 'yearly';
  plan: 'arcade' | 'advanced' | 'pro';
  addOns: {
    onlineServices: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
  };
}