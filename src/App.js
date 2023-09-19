import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const handleClick = (selectedIndex) => {
    console.log(selectedIndex)
  if(squares[selectedIndex] !== "⭕️" || squares[selectedIndex] === null) {
      squares[selectedIndex] = "❌"
      setSquares([...squares])
  }else if(squares[selectedIndex] !== "❌" && squares[selectedIndex] === null) {
    squares[selectedIndex] = "⭕️"
    setSquares([...squares])
  }
 //if(squares[selectedIndex] !== "❌" && squares[selectedIndex] === null) 
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