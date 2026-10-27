import { useState } from 'react';
import './App.css'
function App() {
  const [counter ,  setCounter]=useState(0)

  // let counter =5;
  const addVal=()=>{
    if(counter<20){
      setCounter(counter+1)
    }
    
  }
  const remove=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    
  }
  return (
    <>
    <h1>hello world</h1>
    <h2>Counter value:- {counter}</h2>
    <button onClick={addVal}>Increase count</button>
    <br />
    <button onClick={remove}>Decrease count</button>
    </>
  )
}

export default App
