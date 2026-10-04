// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navbar';
import { Home } from './pages/Home';
import { AgeCalculatorForm } from './components/AgeCalculatorForm';

function App() {
  return (
    <Router>
      <Navigation />
      
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-6 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/age-calculator" element={<AgeCalculatorForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;