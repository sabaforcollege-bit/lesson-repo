import { useEffect } from 'react';
import { Formik, Form, Field, FieldArray, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import { HeaderNavigation } from '../components/resume/HeaderNavigation';
import { Input } from '../components/elements/Input';
import { Textarea } from '../components/elements/Textarea';
import { Button } from '../components/elements/Button';
import { ResumePreview } from '../components/resume/ResumePreview';
import { experienceSchema } from '../schemas/resumeValidation';
import { type ExperienceValues } from '../types/resume';
import { getStoredResumeData, saveStoredResumeData } from '../utils/storage';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    experiences: Yup.array().of(experienceSchema),
});

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
            <div className="w-1/2 p-12 bg-white min-h-screen flex flex-col justify-between">
                <div>
                    <HeaderNavigation title="გამოცდილება" step="2/3" />

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        enableReinitialize
                    >
                        {({ values, errors, touched, setTouched }) => {
                            const getFieldError = (index: number, fieldName: string) => {
                                const expErrors = errors.experiences as any;
                                const expTouched = touched.experiences as any;
                                return expTouched?.[index]?.[fieldName] && expErrors?.[index]?.[fieldName];
                            };

                            return (
                                <Form className="flex flex-col gap-6">
                                    <AutoSaveObserver />

                                    <FieldArray name="experiences">
                                        {({ push, remove }) => (
                                            <>
                                                {values.experiences.map((_, index) => {
                                                    const posError = getFieldError(index, 'position');
                                                    const empError = getFieldError(index, 'employer');
                                                    const descError = getFieldError(index, 'description');

                                                    return (
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

                                                            {/* თანამდებობა */}
                                                            <div className="relative">
                                                                <Field name={`experiences.${index}.position`}>
                                                                    {({ field, meta }: { field: any; meta: any }) => (
                                                                        <Input
                                                                            field={field}
                                                                            meta={meta}
                                                                            label="თანამდებობა"
                                                                            placeholder="დეველოპერი, დიზაინერი ა.შ."
                                                                            hint="მინიმუმ 2 სიმბოლო"
                                                                        />
                                                                    )}
                                                                </Field>
                                                                {posError && (
                                                                    <span className="absolute right-3 top-10 text-red-500 font-bold">!</span>
                                                                )}
                                                            </div>

                                                            {/* დამსაქმებელი */}
                                                            <div className="relative">
                                                                <Field name={`experiences.${index}.employer`}>
                                                                    {({ field, meta }: { field: any; meta: any }) => (
                                                                        <Input
                                                                            field={field}
                                                                            meta={meta}
                                                                            label="დამსაქმებელი"
                                                                            placeholder="დამსაქმებელი"
                                                                            hint="მინიმუმ 2 სიმბოლო"
                                                                        />
                                                                    )}
                                                                </Field>
                                                                {empError && (
                                                                    <span className="absolute right-3 top-10 text-red-500 font-bold">!</span>
                                                                )}
                                                            </div>

                                                            {/* თარიღები */}
                                                            <div className="flex gap-4">
                                                                <div className="w-1/2">
                                                                    <Field name={`experiences.${index}.startDate`}>
                                                                        {({ field, meta }: { field: any; meta: any }) => (
                                                                            <Input
                                                                                field={field}
                                                                                meta={meta}
                                                                                type="date"
                                                                                label="დაწყების თარიღი"
                                                                            />
                                                                        )}
                                                                    </Field>
                                                                </div>
                                                                <div className="w-1/2">
                                                                    <Field name={`experiences.${index}.dueDate`}>
                                                                        {({ field, meta }: { field: any; meta: any }) => (
                                                                            <Input
                                                                                field={field}
                                                                                meta={meta}
                                                                                type="date"
                                                                                label="დამთავრების თარიღი"
                                                                            />
                                                                        )}
                                                                    </Field>
                                                                </div>
                                                            </div>

                                                            {/* აღწერა */}
                                                            <div className="relative">
                                                                <Field name={`experiences.${index}.description`}>
                                                                    {({ field, meta }: { field: any; meta: any }) => (
                                                                        <Textarea
                                                                            field={field}
                                                                            meta={meta}
                                                                            label="აღწერა"
                                                                            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                                                                        />
                                                                    )}
                                                                </Field>
                                                                {descError && (
                                                                    <span className="absolute right-3 top-10 text-red-500 font-bold">!</span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    );
                                                })}

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

                                        <Button
                                            type="submit"
                                            variant="primary"
                                            onClick={() => {
                                                const touchedExperiences = values.experiences.map(() => ({
                                                    position: true,
                                                    employer: true,
                                                    startDate: true,
                                                    dueDate: true,
                                                    description: true,
                                                }));
                                                setTouched({ ...touched, experiences: touchedExperiences });
                                            }}
                                        >
                                            შემდეგი
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