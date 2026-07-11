import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
}

function Login({ setIsLoggedIn }: LoginProps) {
  const navigate = useNavigate();
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    
    setIsLoading(true);
    setStatusMessage("მოთხოვნა იგზავნება...");
    setTimeout(() => {
      setStatusMessage("მოთხოვნა გაგზავნილია!");
      setIsLoggedIn(true); 
      setTimeout(() => {
        setIsLoading(false);
        navigate("/");
      }, 2000);
    }, 1000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-md border border-gray-100">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          სისტემაში შესვლა
        </h2>
        
        <form className="mt-8 space-y-4" onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="Username" 
            required 
            disabled={isLoading}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            disabled={isLoading}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
          />
          
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400"
          >
            {isLoading ? "გთხოვთ დაელოდოთ..." : "Log In"}
          </button>
        </form>

        {statusMessage && (
          <div className="mt-4 p-3 text-center rounded-md bg-blue-50 text-blue-700 font-medium border border-blue-100 animate-pulse">
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;