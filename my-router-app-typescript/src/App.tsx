// App.tsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./assets/Login";
import Dashboard from "./assets/dashboard";
import UsersList from "./assets/users";
import Home from "./assets/home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <nav className="bg-white shadow-sm border-b border-gray-100 p-4 flex gap-6 justify-center font-medium text-gray-600">
        <Link to="/" className="hover:text-blue-600 transition-colors">მთავარი</Link>
        <Link to="/users" className="hover:text-blue-600 transition-colors">მომხმარებლები</Link>
        {!isLoggedIn && (
          <Link to="/login" className="hover:text-blue-600 transition-colors">შესვლა (Login)</Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard" className="hover:text-blue-600 transition-colors">დეშბორდი</Link>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;