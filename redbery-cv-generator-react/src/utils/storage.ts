import type { ResumeFormData } from '../types/resume';

const STORAGE_KEY = 'redberry_resume_data';

export const defaultResumeData: ResumeFormData = {
    personalInfo: {
        name: '',
        surname: '',
        image: null,
        aboutData: '',
        email: '',
        phone_number: '',
    },
    experiences: [],
    educations: [],
};

export const getStoredResumeData = (): ResumeFormData => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return defaultResumeData;
    try {
        return JSON.parse(data);
    } catch {
        return defaultResumeData;
    }
};

export const saveStoredResumeData = (data: Partial<ResumeFormData>) => {
    const currentData = getStoredResumeData();
    const updatedData = { ...currentData, ...data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
    window.dispatchEvent(new Event('storage_updated'));
};

export const clearStoredResumeData = () => {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('storage_updated'));
};