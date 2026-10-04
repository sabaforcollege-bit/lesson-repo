import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import FormPage from './pages/FormPage';
import NotFound from './pages/NotFound';
import Step1PersonalInfo from './components/Step1PersonalInfo';
import Step2SelectPlan from './components/Step2SelectPlan';
import Step3AddOns from './components/Step3AddOns';
import Step4Summary from './components/Step4Summary';
import Step5ThankYou from './components/Step5ThankYou';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/" element={<FormPage />}>
          <Route path="your-info" element={<Step1PersonalInfo />} />
          <Route path="select-plan" element={<Step2SelectPlan />} />
          <Route path="add-ons" element={<Step3AddOns />} />
          <Route path="summary" element={<Step4Summary />} />
          <Route path="thank-you" element={<Step5ThankYou />} />
        </Route>

        <Route path="/form" element={<Navigate to="/your-info" replace />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}