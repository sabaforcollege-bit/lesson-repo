import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Supervisor from './pages/Supervisor';
import TeamBuilder from './pages/TeamBuilder';
import Karma from './pages/Karma';
import Calculator from './pages/Calculator';
import NotFound from './pages/NotFound';
import logo from './assets/network-icon-logo.png';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
        <nav className="w-full max-w-7xl mx-auto px-6 pt-6 mb-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Company Logo" className="w-8 h-8 object-contain" />
            <span className="font-bold text-gray-800 text-lg">Four card feature</span>
          </Link>
        </nav>

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/supervisor" element={<Supervisor />} />
            <Route path="/team-builder" element={<TeamBuilder />} />
            <Route path="/karma" element={<Karma />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}