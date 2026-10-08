import { useState } from 'react';
import { useFormik } from 'formik';

interface FormValues {
    username: string;
    lastname: string;
    email: string;
    password: string;
}

export function LoginForm() {
    const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

    const formik = useFormik<FormValues>({
        initialValues: {
            username: '',
            lastname: '',
            email: '',
            password: '',
        },
        validate: (values) => {
            const errors: Partial<FormValues> = {};

            if (!values.username) {
                errors.username = 'სახელის მითითება სავალდებულოა';
            } else if (values.username.length < 3) {
                errors.username = 'სახელი უნდა შეიცავდეს მინიმუმ 3 სიმბოლო';
            }

            if (!values.lastname) {
                errors.lastname = 'გვარის მითითება სავალდებულოა';
            } else if (values.lastname.length < 2) {
                errors.lastname = 'გვარი უნდა შეიცავდეს მინიმუმ 2 სიმბოლო';
            }

            if (!values.email) {
                errors.email = 'მეილის მითითება სავალდებულოა';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'არასწორი ელ.ფოსტის ფორმატი';
            }

            if (!values.password) {
                errors.password = 'პაროლის მითითება სავალდებულოა';
            } else if (values.password.length < 6) {
                errors.password = 'პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს';
            }

            return errors;
        },
        onSubmit: (values) => {
            console.log('ფორმის მონაცემები:', values);
            setSubmittedData(values);
        },
    });

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">რეგისტრაცია</h2>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                        სახელი
                    </label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                        className={`w-full px-3 py-2 border rounded-lg outline-none transition-colors duration-200 ${formik.touched.username && formik.errors.username
                            ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                            : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                            }`}
                        placeholder="ჯონ"
                    />
                    {formik.touched.username && formik.errors.username && (
                        <p className="mt-1 text-sm text-red-500">{formik.errors.username}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
                        გვარი
                    </label>
                    <input
                        id="lastname"
                        name="lastname"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastname}
                        className={`w-full px-3 py-2 border rounded-lg outline-none transition-colors duration-200 ${formik.touched.lastname && formik.errors.lastname
                            ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                            : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                            }`}
                        placeholder="დოე"
                    />
                    {formik.touched.lastname && formik.errors.lastname && (
                        <p className="mt-1 text-sm text-red-500">{formik.errors.lastname}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        ელ.ფოსტა
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className={`w-full px-3 py-2 border rounded-lg outline-none transition-colors duration-200 ${formik.touched.email && formik.errors.email
                            ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                            : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                            }`}
                        placeholder="example@gmail.com"
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        პაროლი
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className={`w-full px-3 py-2 border rounded-lg outline-none transition-colors duration-200 ${formik.touched.password && formik.errors.password
                            ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                            : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                            }`}
                        placeholder="••••••••"
                    />
                    {formik.touched.password && formik.errors.password && (
                        <p className="mt-1 text-sm text-red-500">{formik.errors.password}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm"
                >
                    გაგზავნა
                </button>
            </form>

            {submittedData && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800">
                    <p className="font-semibold mb-1">ფორმის მონაცემები გაიგზავნა (შეამოწმე Console)</p>
                </div>
            )}
        </div>
    );
}