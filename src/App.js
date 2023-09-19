import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(true)
  console.log(player)
  const handleClick = (selectedIndex) => {

    if(squares[selectedIndex] === null && player === true) {
        squares[selectedIndex] = "❌" 
        setSquares([...squares])
        setPlayer(false)
      }else if(squares[selectedIndex] === null && player === false){
        squares[selectedIndex] = "⭕️"
        setSquares([...squares])
        setPlayer(true)
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






// if(squares[selectedIndex]  === null) {
//   squares[selectedIndex] = "❌" 
//   setSquares([...squares])
// }else if(squares[selectedIndex] !== "❌" && setSquares("❌")) {
//   squares[selectedIndex] = "⭕️"
//   setSquares([...squares])
// }
// //if(squares[selectedIndex] !== "❌" && squares[selectedIndex] === null) 




// if(squares[selectedIndex] !== "⭕️" && squares[selectedIndex] === null) {
//   squares[selectedIndex] = "❌"
//   setSquares([...squares])
// }else if(squares[selectedIndex] !== "❌" && squares[selectedIndex] === null) {
//   squares[selectedIndex] = "⭕️"
//   setSquares([...squares])
// }
// //if(squares[selectedIndex] !== "❌" && squares[selectedIndex] === null) 
// } 





// if (squares[selectedIndex] === null){
//   squares[selectedIndex] = "❌"
//   setSquares([...squares])
// } else if (squares[selectedIndex] % 2 === 1){
//   squares[selectedIndex] = "⭕️"
//   setSquares([...squares])
// }