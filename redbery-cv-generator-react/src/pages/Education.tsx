import { useEffect } from 'react';
import { Formik, Form, Field, FieldArray, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import { HeaderNavigation } from '../components/resume/HeaderNavigation';
import { Input } from '../components/elements/Input';
import { Textarea } from '../components/elements/Textarea';
import { Button } from '../components/elements/Button';
import { ResumePreview } from '../components/resume/ResumePreview';
import { educationSchema } from '../schemas/resumeValidation';
import { type EducationValues } from '../types/resume';
import { getStoredResumeData, saveStoredResumeData } from '../utils/storage';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    educations: Yup.array().of(educationSchema),
});

const degreesList = [
    'საშუალო სკოლის დიპლომი',
    'ბაკალავრი',
    'მაგისტრი',
    'დოქტორი',
    'ასოცირებული ხარისხი',
    'სტუდენტი',
    'სხვა',
];

function AutoSaveObserver() {
    const { values } = useFormikContext<{ educations: EducationValues[] }>();

    useEffect(() => {
        saveStoredResumeData({ educations: values.educations });
    }, [values]);

    return null;
}

export function Education() {
    const navigate = useNavigate();
    const savedData = getStoredResumeData();

    const initialValues = {
        educations:
            savedData.educations && savedData.educations.length > 0
                ? savedData.educations
                : [
                    {
                        institute: '',
                        degree: '',
                        dueDate: '',
                        description: '',
                    },
                ],
    };

    const handleSubmit = (values: { educations: EducationValues[] }) => {
        saveStoredResumeData({ educations: values.educations });
        navigate('/resume');
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="w-1/2 p-12 bg-white min-h-screen flex flex-col justify-between">
                <div>
                    <HeaderNavigation title="განათლება" step="3/3" />

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        enableReinitialize
                    >
                        {({ values, errors }) => {
                            if (Object.keys(errors).length > 0) {
                                console.log('Education Validation Errors:', errors);
                            }

                            return (
                                <Form className="flex flex-col gap-6">
                                    <AutoSaveObserver />

                                    <FieldArray name="educations">
                                        {({ push, remove }) => (
                                            <>
                                                {values.educations.map((_, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex flex-col gap-4 border-b border-gray-200 pb-6 mb-4 relative"
                                                    >
                                                        {index > 0 && (
                                                            <button
                                                                type="button"
                                                                onClick={() => remove(index)}
                                                                className="self-end text-red-500 text-sm hover:underline font-medium"
                                                            >
                                                                წაშლა
                                                            </button>
                                                        )}

                                                        <Field
                                                            name={`educations.${index}.institute`}
                                                            component={Input}
                                                            label="სასწავლებელი"
                                                            placeholder="სასწავლებელი"
                                                            hint="მინიმუმ 2 სიმბოლო"
                                                        />

                                                        <div className="flex gap-4">
                                                            {/* Dropdown ხარისხის არჩევისთვის */}
                                                            <div className="flex flex-col gap-2 w-1/2">
                                                                <label className="text-sm font-bold text-gray-800">
                                                                    ხარისხი
                                                                </label>
                                                                <Field
                                                                    as="select"
                                                                    name={`educations.${index}.degree`}
                                                                    className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:border-blue-500"
                                                                >
                                                                    <option value="">აირჩიეთ ხარისხი</option>
                                                                    {degreesList.map((deg) => (
                                                                        <option key={deg} value={deg}>
                                                                            {deg}
                                                                        </option>
                                                                    ))}
                                                                </Field>
                                                            </div>

                                                            <div className="w-1/2">
                                                                <Field
                                                                    name={`educations.${index}.dueDate`}
                                                                    component={Input}
                                                                    type="date"
                                                                    label="დამთავრების თარიღი"
                                                                />
                                                            </div>
                                                        </div>

                                                        <Field
                                                            name={`educations.${index}.description`}
                                                            component={Textarea}
                                                            label="აღწერა"
                                                            placeholder="განათლების აღწერა"
                                                        />
                                                    </div>
                                                ))}

                                                <Button
                                                    type="button"
                                                    variant="secondary"
                                                    onClick={() =>
                                                        push({
                                                            institute: '',
                                                            degree: '',
                                                            dueDate: '',
                                                            description: '',
                                                        })
                                                    }
                                                    className="w-fit"
                                                >
                                                    სხვა სასწავლებლის დამატება
                                                </Button>
                                            </>
                                        )}
                                    </FieldArray>

                                    <div className="flex justify-between items-center mt-8">
                                        <Button
                                            type="button"
                                            variant="primary"
                                            onClick={() => navigate('/experience')}
                                        >
                                            უკან
                                        </Button>
                                        <Button type="submit" variant="primary">
                                            დასრულება
                                        </Button>
                                    </div>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </div>

            <div className="w-1/2 p-12 bg-white border-l">
                <ResumePreview />
            </div>
        </div>
    );
}