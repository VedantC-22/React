import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
  <>
      <div className="h-screen" style={{backgroundColor: color}}>
        <ul className='fixed w-full justify-evenly bottom-6 list:none flex flex-wrap flex-row items-center gap-3'>
          <li className="colors rounded"><button onClick={() => setColor('red')} className='rounded w-20 bg-red ' >Red</button></li>
          <li className="colors"><button onClick={() => setColor('green')} className='w-20 bg-green'>Green</button></li>
          <li className="colors"><button onClick={() => setColor('yellow')} className='w-20'>Yellow</button></li>
          <li className="colors"><button onClick={() => setColor('blue')} className='w-20'>Blue</button></li>
          <li className="colors"><button onClick={() => setColor('orange')} className='w-20'>Orange</button></li>
        </ul>
      </div>
    </>
  )
}

export default App
