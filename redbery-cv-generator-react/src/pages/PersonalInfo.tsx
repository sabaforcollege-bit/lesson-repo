import { useEffect } from 'react';
import { Formik, Form, Field, useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import { HeaderNavigation } from '../components/resume/HeaderNavigation';
import { Input } from '../components/elements/Input';
import { Textarea } from '../components/elements/Textarea';
import { Button } from '../components/elements/Button';
import { ResumePreview } from '../components/resume/ResumePreview';
import { personalInfoSchema } from '../schemas/resumeValidation';
import type { PersonalInfoValues } from '../types/resume';
import { getStoredResumeData, saveStoredResumeData } from '../utils/storage';

// კომპონენტი, რომელიც Formik-ის ველების ცვლილებას უსმენს და LocalStorage-ში ინახავს
function AutoSaveObserver() {
    const { values } = useFormikContext<PersonalInfoValues>();

    useEffect(() => {
        saveStoredResumeData({ personalInfo: values });
    }, [values]);

    return null;
}

export function PersonalInfo() {
    const navigate = useNavigate();
    const savedData = getStoredResumeData();

    const initialValues: PersonalInfoValues = savedData.personalInfo || {
        name: '',
        surname: '',
        image: null,
        aboutData: '',
        email: '',
        phone_number: '',
    };

    const handleSubmit = (values: PersonalInfoValues) => {
        saveStoredResumeData({ personalInfo: values });
        navigate('/experience');
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* მარცხენა მხარე - ფორმა */}
            <div className="w-1/2 p-12 bg-white min-h-screen flex flex-col justify-between">
                <div>
                    <HeaderNavigation title="პირადი ინფო" step="1/3" />

                    <Formik
                        initialValues={initialValues}
                        validationSchema={personalInfoSchema}
                        onSubmit={handleSubmit}
                        enableReinitialize
                    >
                        {({ setFieldValue }) => (
                            <Form className="flex flex-col gap-6">
                                <AutoSaveObserver />

                                {/* სახელი და გვარი */}
                                <div className="flex gap-4">
                                    <Field
                                        name="name"
                                        component={Input}
                                        label="სახელი"
                                        placeholder="ანზორ"
                                        hint="მინიმუმ 2 ასო, ქართული ასოები"
                                    />
                                    <Field
                                        name="surname"
                                        component={Input}
                                        label="გვარი"
                                        placeholder="მუმლაძე"
                                        hint="მინიმუმ 2 ასო, ქართული ასოები"
                                    />
                                </div>

                                {/* ფოტოს ატვირთვა */}
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-bold text-gray-800">
                                        პირადი ფოტოს ატვირთვა
                                    </span>
                                    <label className="bg-[#62A1EB] text-white px-4 py-2 rounded-md cursor-pointer text-sm font-medium hover:bg-[#5190DA] transition-colors">
                                        ატვირთვა
                                        <input
                                            type="file"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.currentTarget.files?.[0];
                                                if (file) {
                                                    const reader = new FileReader();
                                                    reader.onloadend = () => {
                                                        setFieldValue('image', reader.result);
                                                    };
                                                    reader.readAsDataURL(file);
                                                }
                                            }}
                                        />
                                    </label>
                                </div>

                                {/* ჩემ შესახებ */}
                                <Field
                                    name="aboutData"
                                    component={Textarea}
                                    label="ჩემ შესახებ (არასავალდებულო)"
                                    placeholder="ზოგადი ინფო შენ შესახებ"
                                />

                                {/* ელ.ფოსტა */}
                                <Field
                                    name="email"
                                    component={Input}
                                    label="ელ.ფოსტა"
                                    placeholder="anzor666@redberry.ge"
                                    hint="უნდა მთავრდებოდეს @redberry.ge-ით"
                                />

                                {/* მობილურის ნომერი */}
                                <Field
                                    name="phone_number"
                                    component={Input}
                                    label="მობილურის ნომერი"
                                    placeholder="+995 551 12 34 56"
                                    hint="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
                                />

                                {/* შემდეგი ღილაკი */}
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

            {/* მარჯვენა მხარე - Live Preview */}
            <div className="w-1/2 p-12 bg-white border-l">
                <ResumePreview />
            </div>
        </div>
    );
}