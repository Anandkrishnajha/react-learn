import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

// let counter=15
  // const addValue=()=>{
  //   counter=counter +1
  //   console.log(counter);
    
  // }

  const[counter,setCounter] = useState(10)
  //const[variable,function]
  //   const addValue=()=>{
  //   setCounter(counter+1)  
  // }

  //call back way
  const addValue=()=>{
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)  
    setCounter((prevCounter)=>prevCounter+1)  
    setCounter((prevCounter)=>prevCounter+1)
  }

  const removeValue=()=>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>React Project-2 {counter}</h1>
      <h2>Counter Button {counter}</h2>
      <button onClick={addValue}>Add Value</button> {" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
