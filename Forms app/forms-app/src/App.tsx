import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FormProvider } from './context/formContext';
import { Home } from './pages/Home';
import { MultiStepFormPage } from './pages/MultiStepFormPage';
import { Step1PersonalInfo } from './components/Step1PesonInfo';
import { Step2SelectPlan } from './components/Step2SelectPlan';
import { Step3AddOns } from './components/Step3AddOns';
import { Step4Summary } from './components/Step4Summary';
import { Step5ThankYou } from './components/Step5ThankYou';

export function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/form" element={<MultiStepFormPage />}>
            <Route index element={<Navigate to="info" replace />} />
            <Route path="info" element={<Step1PersonalInfo />} />
            <Route path="plan" element={<Step2SelectPlan />} />
            <Route path="addons" element={<Step3AddOns />} />
            <Route path="summary" element={<Step4Summary />} />
            <Route path="thankyou" element={<Step5ThankYou />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FormProvider>
  );
}

export default App;