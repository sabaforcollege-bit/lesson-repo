import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormProvider } from './context/FormContext';
import { Home } from './pages/Home';
import { MultiStepFormPage } from './pages/MultiStepFormPage';

export function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<MultiStepFormPage />} />
        </Routes>
      </BrowserRouter>
    </FormProvider>
  );
}

export default App;