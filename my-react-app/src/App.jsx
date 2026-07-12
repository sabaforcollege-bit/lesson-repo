import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import LogoutButton from "./components/buttons/LogoutButton";
import Users from "./components/list/Users";

function App() {
  const [userName, setUserName] = useState("Giorgi");

  const [isLoggedIn, setIsloggedIn] = useState(false);
  console.log(isLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <div className="flex">
          <h1>გამარჯობა {userName}</h1>
          <LogoutButton />
        </div>
      ) : (
        <button
          onClick={() => {
            setIsloggedIn(true);
          }}
        >
          Log In
        </button>
      )}

      <Users />
    </>
  );
}

export default App;