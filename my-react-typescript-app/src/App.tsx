import { useState } from 'react'
import './App.css'
import Users from './Users'
import MyButton from './Mybutton'

const [selectedButton, setSelectedButton] = useState</>
  function App() {
    interface IPerson {
      firstName: string,
      lastName: string,
      age: number
    }
    const [count, setCount] = useState<any>(0)
    console.log(count)

    const person: IPerson = {
      firstName: "Mate",
      lastName: "Kavelashvili",
      age: 25
    }
    const { firstName, lastName, age } = person;

    return (
      <>
        <h1 className='font-bold text-lg text-red-400'>Saba</h1>
        <button onClick={() => setCount('Name')}>click me</button>

        <p>
          {firstName} {lastName} {person.age}
        </p>
        <Users />
        <div>
          <MyButton text="First Button" />
          <MyButton text="Second Button" />
          <MyButton text="Third Button" />
        </div>
      </>
    )
  }


export default App
