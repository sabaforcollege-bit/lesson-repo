import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { SearchUser } from "./pages/Searchuser";
import { AboutUs } from "./pages/Aboutus";
import { NotFound } from "./pages/NotFound";

function RefreshHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. ამოწმებს, მოხდა თუ არა რეალური რეფრეში
    const wasReloaded = sessionStorage.getItem("isPageReloaded");

    if (wasReloaded) {
      // წაშალე დროშა, რომ შემდგომმა ნავიგაციამ იმოქმედოს
      sessionStorage.removeItem("isPageReloaded");
      // გადაიყვანე მთავარ გვერდზე
      navigate("/", { replace: true });
    }

    // 2. გვერდის დარეფრეშების მომენტში ჩაწერი დროშა
    const handleBeforeUnload = () => {
      sessionStorage.setItem("isPageReloaded", "true");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [navigate]);

  return null;
}

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300 p-4 md:p-8">
        <div className="max-w-2xl mx-auto">
          <BrowserRouter>
            <RefreshHandler />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/searchUser" element={<SearchUser />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;