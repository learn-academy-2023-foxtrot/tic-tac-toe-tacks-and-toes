import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill("💯"))
  const handleClick = (select) => {
  if(select % 2 === 0){
    setSquares = "❌"
    
  } else {
    setSquares = "⭕️"
  }
  } 
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square squares={squares}
       handleClick={handleClick}
       />
    </>
  )
}

export default App