import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setCounter] = useState(10)
  const [message, setMessage]= useState(value)
  // let value = 10 //change in this variable will not be reflect on the UI
  const incValue = () => {
    
    if (value == 10){
      setMessage('Value riched to its max')
    }else{
      setMessage(value + 1)
      setCounter(value + 1)
      
    }
  };

  const decValue = () => {
    if (value == 0){
      setMessage('value is 0')
    }else{
      setCounter(value - 1)
      setMessage(value -1)
    }
  };
  return (
    <>
      <h1>Counter</h1>
      <h3>Counter Value: {value}</h3>
      <button onClick={incValue}>+</button> &nbsp;
      <button onClick={decValue}>-</button>
      <br />
      <span>{message}</span>
    </>
  )
}

export default App
