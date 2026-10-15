import { Formik, Form, Field, FieldArray } from 'formik';
import { useNavigate } from 'react-router-dom';
import { HeaderNavigation } from '../components/resume/HeaderNavigation';
import { Input } from '../components/elements/Input';
import { Textarea } from '../components/elements/Textarea';
import { Button } from '../components/elements/Button';
import { ResumePreview } from '../components/resume/ResumePreview';
import { educationSchema } from '../schemas/resumeValidation';
import { type EducationValues } from '../types/resume';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { updateEducations } from '../store/resumeSlice';
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

export function Education() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    // 👈 ვიღებთ განათლების მონაცემებს Redux-იდან
    const savedEducations = useAppSelector((state) => state.resume.educations);

    const initialValues = {
        educations:
            savedEducations && savedEducations.length > 0
                ? savedEducations
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
        dispatch(updateEducations(values.educations)); // 👈 ვინახავთ Redux-ში
        navigate('/resume'); // ან ფინალურ გვერდზე
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
                        {({ values, errors, touched, setTouched }) => {
                            const getFieldError = (index: number, fieldName: string) => {
                                const eduErrors = errors.educations as any;
                                const eduTouched = touched.educations as any;
                                return eduTouched?.[index]?.[fieldName] && eduErrors?.[index]?.[fieldName];
                            };

                            return (
                                <Form className="flex flex-col gap-6">
                                    <FieldArray name="educations">
                                        {({ push, remove }) => (
                                            <>
                                                {values.educations.map((_, index) => {
                                                    const instError = getFieldError(index, 'institute');
                                                    const degError = getFieldError(index, 'degree');

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

                                                            {/* სასწავლებელი */}
                                                            <div className="relative">
                                                                <Field name={`educations.${index}.institute`}>
                                                                    {({ field, meta }: { field: any; meta: any }) => (
                                                                        <Input
                                                                            field={field}
                                                                            meta={meta}
                                                                            label="სასწავლებელი"
                                                                            placeholder="სასწავლებელი"
                                                                            hint="მინიმუმ 2 სიმბოლო"
                                                                        />
                                                                    )}
                                                                </Field>
                                                                {instError && (
                                                                    <span className="absolute right-3 top-10 text-red-500 font-bold">!</span>
                                                                )}
                                                            </div>

                                                            <div className="flex gap-4">
                                                                {/* ხარისხი */}
                                                                <div className="flex flex-col gap-2 w-1/2">
                                                                    <label className="text-sm font-bold text-gray-800">
                                                                        ხარისხი
                                                                    </label>
                                                                    <Field
                                                                        as="select"
                                                                        name={`educations.${index}.degree`}
                                                                        className={`w-full p-3 border rounded-md bg-white text-gray-700 focus:outline-none ${degError ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                                                                            }`}
                                                                    >
                                                                        <option value="">აირჩიეთ ხარისხი</option>
                                                                        {degreesList.map((deg) => (
                                                                            <option key={deg} value={deg}>
                                                                                {deg}
                                                                            </option>
                                                                        ))}
                                                                    </Field>
                                                                    {degError && (
                                                                        <span className="text-xs text-red-500">სავალდებულოა</span>
                                                                    )}
                                                                </div>

                                                                {/* თარიღი */}
                                                                <div className="w-1/2">
                                                                    <Field name={`educations.${index}.dueDate`}>
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
                                                            <div>
                                                                <Field name={`educations.${index}.description`}>
                                                                    {({ field, meta }: { field: any; meta: any }) => (
                                                                        <Textarea
                                                                            field={field}
                                                                            meta={meta}
                                                                            label="აღწერა"
                                                                            placeholder="განათლების აღწერა"
                                                                        />
                                                                    )}
                                                                </Field>
                                                            </div>
                                                        </div>
                                                    );
                                                })}

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
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            onClick={() => {
                                                const touchedEducations = values.educations.map(() => ({
                                                    institute: true,
                                                    degree: true,
                                                    dueDate: true,
                                                    description: true,
                                                }));
                                                setTouched({ ...touched, educations: touchedEducations });
                                            }}
                                        >
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