import { useEffect } from 'react';
import { Formik, Form, Field, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import { HeaderNavigation } from '../components/resume/HeaderNavigation';
import { Input } from '../components/elements/Input';
import { Textarea } from '../components/elements/Textarea';
import { Button } from '../components/elements/Button';
import { ResumePreview } from '../components/resume/ResumePreview';
import { personalInfoSchema } from '../schemas/resumeValidation';
import { type PersonalInfoValues } from '../types/resume';
import { getStoredResumeData, saveStoredResumeData } from '../utils/storage';

function AutoSaveObserver() {
    const { values } = useFormikContext<PersonalInfoValues>();

    useEffect(() => {
        saveStoredResumeData({ personalInfo: values });
    }, [values]);

    return null;
}

export function PersonalInfo() {
    const navigate = useNavigate();
    const savedData = getStoredResumeData() as any;

    const initialValues: PersonalInfoValues = {
        name: savedData?.personalInfo?.name || savedData?.name || '',
        surname: savedData?.personalInfo?.surname || savedData?.surname || '',
        email: savedData?.personalInfo?.email || savedData?.email || '',
        phone_number: savedData?.personalInfo?.phone_number || savedData?.phone_number || '',
        aboutData: savedData?.personalInfo?.aboutData || savedData?.aboutData || '',
        image: savedData?.personalInfo?.image || savedData?.image || null,
    };

    const handleSubmit = (values: PersonalInfoValues) => {
        saveStoredResumeData({ personalInfo: values });
        navigate('/experience');
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="w-1/2 p-12 bg-white min-h-screen flex flex-col justify-between">
                <div>
                    <HeaderNavigation title="პირადი ინფო" step="1/3" />

                    <Formik
                        initialValues={initialValues}
                        validationSchema={personalInfoSchema}
                        onSubmit={handleSubmit}
                        enableReinitialize
                    >
                        {({ handleSubmit, errors, touched, setFieldValue }) => (
                            <Form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <AutoSaveObserver />

                                {/* სახელი და გვარი */}
                                <div className="flex gap-4">
                                    <div className="w-1/2 relative">
                                        <Field name="name">
                                            {({ field, meta }: { field: any; meta: any }) => (
                                                <Input
                                                    field={field}
                                                    meta={meta}
                                                    label="სახელი"
                                                    placeholder="ანზორ"
                                                    hint="მინიმუმ 2 ასო, ქართული ასოები"
                                                />
                                            )}
                                        </Field>
                                        {touched.name && errors.name && (
                                            <span className="absolute right-3 top-10 text-red-500 font-bold">!</span>
                                        )}
                                    </div>

                                    <div className="w-1/2 relative">
                                        <Field name="surname">
                                            {({ field, meta }: { field: any; meta: any }) => (
                                                <Input
                                                    field={field}
                                                    meta={meta}
                                                    label="გვარი"
                                                    placeholder="მუმლაძე"
                                                    hint="მინიმუმ 2 ასო, ქართული ასოები"
                                                />
                                            )}
                                        </Field>
                                        {touched.surname && errors.surname && (
                                            <span className="absolute right-3 top-10 text-red-500 font-bold">!</span>
                                        )}
                                    </div>
                                </div>

                                {/* ფოტოს ატვირთვის ველი (სახელისა და გვარის შემდეგ) */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-800">პირადი ფოტოს ატვირთვა</label>
                                    <div className="flex items-center gap-4">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            id="imageUpload"
                                            className="hidden"
                                            onChange={(event) => {
                                                const file = event.currentTarget.files?.[0];
                                                if (file) {
                                                    const reader = new FileReader();
                                                    reader.onloadend = () => {
                                                        setFieldValue('image', reader.result);
                                                    };
                                                    reader.readAsDataURL(file);
                                                }
                                            }}
                                        />
                                        <label
                                            htmlFor="imageUpload"
                                            className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer text-sm font-medium hover:bg-blue-600 transition-colors"
                                        >
                                            ატვირთვა
                                        </label>
                                    </div>
                                </div>

                                {/* ელ.ფოსტა */}
                                <div className="relative">
                                    <Field name="email">
                                        {({ field, meta }: { field: any; meta: any }) => (
                                            <Input
                                                field={field}
                                                meta={meta}
                                                label="ელ.ფოსტა"
                                                placeholder="anzor666@redberry.ge"
                                                hint="უნდა მთავრდებოდეს @redberry.ge-ით"
                                            />
                                        )}
                                    </Field>
                                    {touched.email && errors.email && (
                                        <span className="absolute right-3 top-10 text-red-500 font-bold">!</span>
                                    )}
                                </div>

                                {/* მობილურის ნომერი */}
                                <div className="relative">
                                    <Field name="phone_number">
                                        {({ field, meta }: { field: any; meta: any }) => (
                                            <Input
                                                field={field}
                                                meta={meta}
                                                label="მობილურის ნომერი"
                                                placeholder="+995 551 12 34 56"
                                                hint="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
                                            />
                                        )}
                                    </Field>
                                    {touched.phone_number && errors.phone_number && (
                                        <span className="absolute right-3 top-10 text-red-500 font-bold">!</span>
                                    )}
                                </div>

                                {/* ჩემ შესახებ */}
                                <div className="relative">
                                    <Field name="aboutData">
                                        {({ field, meta }: { field: any; meta: any }) => (
                                            <Textarea
                                                field={field}
                                                meta={meta}
                                                label="ჩემ შესახებ (არასავალდებულო)"
                                                placeholder="ზოგადი ინფო შენ შესახებ"
                                            />
                                        )}
                                    </Field>
                                    {touched.aboutData && errors.aboutData && (
                                        <span className="absolute right-3 top-10 text-red-500 font-bold">!</span>
                                    )}
                                </div>

                                <div className="flex justify-end mt-8">
                                    <Button type="submit" variant="primary">
                                        შემდეგი
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

            <div className="w-1/2 p-12 bg-white border-l">
                <ResumePreview />
            </div>
        </div>
    );
}