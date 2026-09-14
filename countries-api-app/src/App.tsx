import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';

export default function App() {
  const { theme } = useTheme();
  const [activeSearch, setActiveSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleResetFilters = () => {
    setActiveSearch('');
    setSelectedRegion('');
  };

  return (
    <BrowserRouter>
      {/* თემის მიხედვით დინამიურად ეცვლება ფონი და ტექსტის ფერი */}
      <div
        className={
          theme === 'dark'
            ? 'min-h-screen bg-[#202c36] text-white transition-colors duration-300'
            : 'min-h-screen bg-[#fafafa] text-[#111517] transition-colors duration-300'
        }
      >
        <Header onReset={handleResetFilters} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                activeSearch={activeSearch}
                setActiveSearch={setActiveSearch}
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
              />
            }
          />
          <Route path="/country/:code" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}