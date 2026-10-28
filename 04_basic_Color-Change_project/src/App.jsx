import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('red')

  
  return (
    <div className="w-full h-screen item-center duration-200" style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-content bottom12 insert-x-0 px-2  '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=> setColor("red")} className='outline-none px-4 py1 rounded-full text-white shadow-lg' style={{backgroundColor:'red'}}>RED</button>
          <button onClick={()=> setColor("green")} className='outline-none px-4 py1 rounded-full text-white shadow-lg' style={{backgroundColor:'green'}}>green</button>
          <button onClick={()=> setColor("yellow")} className='outline-none px-4 py1 rounded-full text-white shadow-lg' style={{backgroundColor:'yellow'}}>yellow</button>
          <button onClick={()=> setColor("blue")} className='outline-none px-4 py1 rounded-full text-white shadow-lg' style={{backgroundColor:'blue'}}>blue</button>
        </div>
        
      </div>

    </div>
    
  )
}

export default App

