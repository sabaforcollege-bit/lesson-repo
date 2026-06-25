import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Dashboard } from "./Dashboard";
import { Calculator } from "./Calculator";

function App() {
  function handleClick() {
    console.log("button clicked")
  }
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount((prevCount) => prevCount + 1);
  }
  const isDisabled = false;
  const myAge = 19;
  const isLoggedin = true;
  const [showText, setShowText] = useState(true);

  return (
    <>
      <div className='header'>
        <div className='count'>
          <h1>{count}</h1>
          <button onClick={increaseCount}>+1</button>
        </div>
        {showText && <p>Showing text</p>}
        <button onClick={() => { setShowText(!showText) }}> {'>'} {showText ? "hide" : "show"}</button>
      </div>

      <div className='updated'>
        <Dashboard />
        <div className='buttons'>
          <button onClick={handleClick}>Click Here!</button>
          <button onClick={() => { console.log("Button clicked from callback") }}>Click Here for callback!</button>
        </div>
        <Calculator />
      </div>

      <div className='footer'>
        {isDisabled ? (
          <button disabled>Disabled</button>
        ) : (
          <button>Click Here!</button>
        )}
        {myAge >= 18 ? <h1>შენ შეგიძლია მართვის მოწმობის აღება</h1> : <h1>შენ ვერ აიღებ მართვის მოწმობას</h1>}
        {isLoggedin && (
          <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="" />
        )}
      </div>
    </>
  )
}

export default App
