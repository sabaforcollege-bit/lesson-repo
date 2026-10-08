import type { ChangeEvent } from 'react';
import { useFormik } from 'formik';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { cardValidationSchema } from '../utils/validationSchema';
import type { CardFormValues } from '../types/card';

interface CardFormProps {
    initialValues: CardFormValues;
    onChangeValues: (values: CardFormValues) => void;
    onSuccess: () => void;
}

export function CardForm({ initialValues, onChangeValues, onSuccess }: CardFormProps) {
    const formik = useFormik<CardFormValues>({
        initialValues,
        validationSchema: cardValidationSchema,
        onSubmit: () => {
            onSuccess();
        },
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;

        if (name === 'cardNumber') {
            value = value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
            if (value.length > 19) return;
        }

        if ((name === 'expMonth' || name === 'expYear') && value.length > 2) return;
        if (name === 'cvc' && value.length > 3) return;

        formik.setFieldValue(name, value);
        onChangeValues({ ...formik.values, [name]: value });
    };

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 w-full max-w-[380px]">
            <Input
                label="Cardholder Name"
                name="name"
                placeholder="მაგ. Mariam Veshaguri"
                value={formik.values.name}
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                error={formik.errors.name}
                touched={formik.touched.name}
            />

            <Input
                label="Card Number"
                name="cardNumber"
                placeholder="მაგ. 1234 5678 9123 0000"
                value={formik.values.cardNumber}
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                error={formik.errors.cardNumber}
                touched={formik.touched.cardNumber}
            />

            <div className="flex gap-3 items-start">
                <div className="flex flex-col gap-1 w-1/2">
                    <label className="text-xs font-bold tracking-widest uppercase text-[#21092F]">
                        ვადა (თვე/წელი)
                    </label>
                    <div className="flex gap-2">
                        <Input
                            name="expMonth"
                            placeholder="თვე"
                            value={formik.values.expMonth}
                            onChange={handleInputChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.expMonth ? formik.errors.expMonth : undefined}
                            touched={formik.touched.expMonth}
                        />
                        <Input
                            name="expYear"
                            placeholder="წელი"
                            value={formik.values.expYear}
                            onChange={handleInputChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.expYear ? formik.errors.expYear : undefined}
                            touched={formik.touched.expYear}
                        />
                    </div>
                </div>

                <div className="w-1/2">
                    <Input
                        label="CVC"
                        name="cvc"
                        placeholder="მაგ. 123"
                        value={formik.values.cvc}
                        onChange={handleInputChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.cvc}
                        touched={formik.touched.cvc}
                    />
                </div>
            </div>

            <Button type="submit">დადასტურება</Button>
        </form>
    );
}