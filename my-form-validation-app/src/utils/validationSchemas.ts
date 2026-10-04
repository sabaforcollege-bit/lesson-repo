import * as Yup from 'yup';

export const step1ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('ეს ველი სავალდებულოა')
    .matches(/^[^\d]+$/, 'სახელი არ უნდა შეიცავდეს ციფრებს'),

  email: Yup.string()
    .required('ეს ველი სავალდებულოა')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'ემაილი არასწორია ( davitadamia@gmail.com )'
    ),

  phone: Yup.string()
    .required('ეს ველი სავალდებულოა')
    .matches(
      /^\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/,
      'ტელეფონის ნომრის ფორმატი არასწორია ( +995 000 00 00 00 )'
    ),
});