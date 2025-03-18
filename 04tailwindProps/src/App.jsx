import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  let obj = {
    name: "React",
    desc: "Learning react"
  };

  let arr = [1, 2, 5, 36]

  return (
    <>
     <h1 className='bg-red-600 dark:bg-slate-800 shadow-xl mx-auto max-w-sm rounded-xl p-4 dark:outline-white/10 dark:-outline-offset-1'>Tailwind Test</h1>
    <Card name="React" data={obj} arr={arr} />
    <Card name="JavaScript" data={obj} />
    </>
  )
}

export default App
