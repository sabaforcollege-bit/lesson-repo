import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PersonalInfoValues, ExperienceValues, EducationValues } from '../types/resume';

interface ResumeState {
    personalInfo: PersonalInfoValues;
    experiences: ExperienceValues[];
    educations: EducationValues[];
}

const loadFromStorage = (): ResumeState => {
    try {
        const savedData = localStorage.getItem('resumeData');
        if (savedData) {
            return JSON.parse(savedData);
        }
    } catch (error) {
        console.error('localStorage-დან ჩამოტვირთვის პრობლემა', error);
    }
    return {
        personalInfo: {
            name: '',
            surname: '',
            email: '',
            phone_number: '',
            aboutData: '',
            image: null,
        },
        experiences: [],
        educations: [],
    };
};

const initialState: ResumeState = loadFromStorage();

const saveToStorage = (state: ResumeState) => {
    try {
        localStorage.setItem('resumeData', JSON.stringify(state));
    } catch (error) {
        console.error('localStorage-ზე ატვირთვის პრობლემა', error);
    }
};

export const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        updatePersonalInfo: (state, action: PayloadAction<PersonalInfoValues>) => {
            state.personalInfo = action.payload;
            saveToStorage(state);
        },
        updateExperiences: (state, action: PayloadAction<ExperienceValues[]>) => {
            state.experiences = action.payload;
            saveToStorage(state);
        },
        updateEducations: (state, action: PayloadAction<EducationValues[]>) => {
            state.educations = action.payload;
            saveToStorage(state);
        },
        resetResume: (state) => {
            state.personalInfo = { name: '', surname: '', email: '', phone_number: '', aboutData: '', image: null };
            state.experiences = [];
            state.educations = [];
            localStorage.removeItem('resumeData');
        },
    },
});

export const { updatePersonalInfo, updateExperiences, updateEducations, resetResume } = resumeSlice.actions;
export default resumeSlice.reducer;