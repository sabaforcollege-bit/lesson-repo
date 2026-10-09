import * as Yup from 'yup';

export const personalInfoSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'მინ 2 სიმბოლო')
        .matches(/^[ა-ჰა-ჸᲐ-Ჺ]+$/, 'მხოლოდ ქართული სიმბოლოები')
        .required('სავალდებულოა'),
    surname: Yup.string()
        .min(2, 'მინ 2 სიმბოლო')
        .matches(/^[ა-ჰა-ჸᲐ-Ჺ]+$/, 'მხოლოდ ქართული სიმბოლოები')
        .required('სავალდებულოა'),
    email: Yup.string()
        .email('არასწორი ემაილის ფორმატი')
        .matches(/@redberry\.ge$/, 'უნდა მთავრდებოდეს @redberry.ge')
        .required('სავალდებულოა'),
    phone_number: Yup.string()
        .matches(/^\+995\d{9}$/, 'უნდა ჯდებოდეს ქართული ტელეფონის ნომრის ფორმატში (+995XXXXXXXXX)')
        .required('სავალდებულოა'),
    aboutData: Yup.string().optional(),
});

export const experienceSchema = Yup.object().shape({
    position: Yup.string().min(2, 'მინ 2 სიმბოლო').required('სავალდებულოა'),
    employer: Yup.string().min(2, 'მინ 2 სიმბოლო').required('სავალდებულოა'),
    startDate: Yup.string().required('სავალდებულოა'),
    dueDate: Yup.string().required('სავალდებულოა'),
    description: Yup.string().optional(),
});

export const educationSchema = Yup.object().shape({
    institute: Yup.string().min(2, 'მინიმუმ 2 სიმბოლო').required('სავალდებულოა'),
    degree: Yup.string().required('სავალდებულოა'),
    dueDate: Yup.string().required('სავალდებულოა'),
    description: Yup.string().required('სავალდებულოა'),
});