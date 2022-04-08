import { useState } from 'react'
import logo from './logo.svg'
import React from 'react'
import './App.css'

function App() {
  const [counter, setCount] = React.useState(1)

  const handelAdd = ( value)=>{

    setCount(counter + value)
    // console.log(counter + value)
  }
  const double = ( value)=>{

    setCount(counter * 2 )
    // console.log(counter + value)
  }
  const clear = (value) => {

    setCount(counter == 0 )
    // console.log(counter + value)
  }

  return (
    <div className="App">
     
        <h1>Counter</h1><h2>{counter}</h2>
   
        <button onClick = {()=> handelAdd(1)}>Add 1</button>
        <button onClick = {()=> handelAdd(-1)}>Sub 1</button>
        <button onClick = {()=> double(1)}>Double</button> 
        <button onClick = {()=> clear(1)}>Clear</button>
 
 
 
 
       
    
    </div>
  )
}

export default App
