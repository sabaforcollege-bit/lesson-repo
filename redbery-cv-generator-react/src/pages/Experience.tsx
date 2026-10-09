import { useEffect } from 'react';
import { Formik, Form, Field, FieldArray, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import { HeaderNavigation } from '../components/resume/HeaderNavigation';
import { Input } from '../components/elements/Input';
import { Textarea } from '../components/elements/Textarea';
import { Button } from '../components/elements/Button';
import { ResumePreview } from '../components/resume/ResumePreview';
import { experienceSchema } from '../schemas/resumeValidation';
import type { ExperienceValues } from '../types/resume';
import { getStoredResumeData, saveStoredResumeData } from '../utils/storage';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    experiences: Yup.array().of(experienceSchema),
});

// მონაცემების LocalStorage-ში ავტომატურად შენახვა Real-time-ში
function AutoSaveObserver() {
    const { values } = useFormikContext<{ experiences: ExperienceValues[] }>();

    useEffect(() => {
        saveStoredResumeData({ experiences: values.experiences });
    }, [values]);

    return null;
}

export function Experience() {
    const navigate = useNavigate();
    const savedData = getStoredResumeData();

    // საწყისი მნიშვნელობები LocalStorage-დან
    const initialValues = {
        experiences:
            savedData.experiences && savedData.experiences.length > 0
                ? savedData.experiences
                : [
                    {
                        position: '',
                        employer: '',
                        startDate: '',
                        dueDate: '',
                        description: '',
                    },
                ],
    };

    const handleSubmit = (values: { experiences: ExperienceValues[] }) => {
        saveStoredResumeData({ experiences: values.experiences });
        navigate('/education');
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* მარცხენა მხარე - ფორმა */}
            <div className="w-1/2 p-12 bg-white min-h-screen flex flex-col justify-between">
                <div>
                    <HeaderNavigation title="გამოცდილება" step="2/3" />

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        enableReinitialize
                    >
                        {({ values, errors }) => {
                            if (Object.keys(errors).length > 0) {
                                console.log('Experience Validation Errors:', errors);
                            }

                            return (
                                <Form className="flex flex-col gap-6">
                                    <AutoSaveObserver />

                                    <FieldArray name="experiences">
                                        {({ push, remove }) => (
                                            <>
                                                {values.experiences.map((_, index) => (
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
                                                            name={`experiences.${index}.position`}
                                                            component={Input}
                                                            label="თანამდებობა"
                                                            placeholder="დეველოპერი, დიზაინერი ა.შ."
                                                            hint="მინიმუმ 2 სიმბოლო"
                                                        />
                                                        <Field
                                                            name={`experiences.${index}.employer`}
                                                            component={Input}
                                                            label="დამსაქმებელი"
                                                            placeholder="დამსაქმებელი"
                                                            hint="მინიმუმ 2 სიმბოლო"
                                                        />

                                                        <div className="flex gap-4">
                                                            <Field
                                                                name={`experiences.${index}.startDate`}
                                                                component={Input}
                                                                type="date"
                                                                label="დაწყების თარიღი"
                                                            />
                                                            <Field
                                                                name={`experiences.${index}.dueDate`}
                                                                component={Input}
                                                                type="date"
                                                                label="დამთავრების თარიღი"
                                                            />
                                                        </div>

                                                        <Field
                                                            name={`experiences.${index}.description`}
                                                            component={Textarea}
                                                            label="აღწერა"
                                                            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                                                        />
                                                    </div>
                                                ))}

                                                <Button
                                                    type="button"
                                                    variant="secondary"
                                                    onClick={() =>
                                                        push({
                                                            position: '',
                                                            employer: '',
                                                            startDate: '',
                                                            dueDate: '',
                                                            description: '',
                                                        })
                                                    }
                                                    className="w-fit"
                                                >
                                                    მეტი გამოცდილების დამატება
                                                </Button>
                                            </>
                                        )}
                                    </FieldArray>

                                    <div className="flex justify-between items-center mt-8">
                                        <Button
                                            type="button"
                                            variant="primary"
                                            onClick={() => navigate('/personal-info')}
                                        >
                                            უკან
                                        </Button>
                                        <Button type="submit" variant="primary">
                                            შემდეგი
                                        </Button>
                                    </div>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </div>

            {/* მარჯვენა მხარე - Live Preview */}
            <div className="w-1/2 p-12 bg-white border-l">
                <ResumePreview />
            </div>
        </div>
    );
}