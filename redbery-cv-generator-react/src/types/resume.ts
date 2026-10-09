export interface PersonalInfoValues {
    name: string;
    surname: string;
    image: string | null;
    aboutData: string;
    email: string;
    phone_number: string;
}

export interface ExperienceValues {
    position: string;
    employer: string;
    startDate: string;
    dueDate: string;
    description: string;
}

export interface EducationValues {
    institute: string;
    degree: string;
    dueDate: string;
    description: string;
}

export interface ResumeFormData {
    personalInfo: PersonalInfoValues;
    experiences: ExperienceValues[];
    educations: EducationValues[];
}