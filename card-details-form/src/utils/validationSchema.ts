import * as Yup from 'yup';

export const cardValidationSchema = Yup.object().shape({
    name: Yup.string()
        .trim()
        .required("ცარიელია"),
    cardNumber: Yup.string()
        .required("ცარიელია")
        .matches(/^[0-9\s]+$/, 'არასწორი ფორმატი, მხოლოდ ციფრები')
        .transform((value) => value.replace(/\s+/g, ''))
        .min(16, 'უნდა შეიცავდეს 16 ციფრს')
        .max(16, 'უნდა შეიცავდეს 16 ციფრს'),
    expMonth: Yup.string()
        .required("ცარიელია")
        .matches(/^(0[1-9]|1[0-2])$/, 'არასწორი თვე'),
    expYear: Yup.string()
        .required("ცარიელია")
        .matches(/^[0-9]{2}$/, 'არასწორი წელი'),
    cvc: Yup.string()
        .required("ცარიელია")
        .matches(/^[0-9]{3}$/, 'უნდა შეიცავდეს 3 ციფრს'),
});