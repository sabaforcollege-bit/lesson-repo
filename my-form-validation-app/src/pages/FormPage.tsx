import { useFormik } from 'formik';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import type { FormValues } from '../types/form';
import { step1ValidationSchema } from '../utils/validationSchemas';

const initialValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  billingCycle: 'monthly',
  plan: 'arcade',
  addOns: {
    onlineServices: false,
    largerStorage: false,
    customizableProfile: false,
  },
};

const routeSteps = [
  '/your-info',
  '/select-plan',
  '/add-ons',
  '/summary',
  '/thank-you',
];

export default function FormPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentStepIndex = routeSteps.indexOf(location.pathname);

  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema: location.pathname === '/your-info' ? step1ValidationSchema : undefined,
    onSubmit: () => {
      navigate('/thank-you');
    },
  });

  const handleNextStep = async () => {
    if (location.pathname === '/your-info') {
      const errors = await formik.validateForm();
      formik.setTouched({
        name: true,
        email: true,
        phone: true,
      });

      if (Object.keys(errors).length === 0) {
        navigate('/select-plan');
      }
    } else if (location.pathname === '/select-plan') {
      navigate('/add-ons');
    } else if (location.pathname === '/add-ons') {
      navigate('/summary');
    } else if (location.pathname === '/summary') {
      formik.handleSubmit();
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      navigate(routeSteps[currentStepIndex - 1]);
    }
  };

  const isThankYouPage = location.pathname === '/thank-you';

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
      <div className="mb-4 w-full max-w-4xl flex justify-between items-center">
        <Link to="/" className="text-indigo-600 font-semibold hover:underline">
          მთავარ გვერდზე დაბრუნება
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-4xl flex flex-col md:flex-row gap-8 min-h-[550px]">
        <Sidebar />

        <div className="flex-1 flex flex-col justify-between p-4 md:p-8">
          <Outlet context={{ formik, onGoToStep2: () => navigate('/select-plan') }} />

          {!isThankYouPage && (
            <div className="flex justify-between items-center mt-8 pt-4 border-t border-slate-100">
              {currentStepIndex > 0 ? (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="text-slate-400 hover:text-slate-800 font-medium transition-colors"
                >
                  უკან დაბრუნება
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={handleNextStep}
                className={`${
                  location.pathname === '/summary'
                    ? 'bg-indigo-600 hover:bg-indigo-700'
                    : 'bg-slate-900 hover:bg-slate-800'
                } text-white font-medium px-6 py-2.5 rounded-lg transition-colors`}
              >
                {location.pathname === '/summary' ? 'Confirm' : 'შემდეგი ნაბიჯი'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}