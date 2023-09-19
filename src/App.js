import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'
import { calculateNewValue } from '@testing-library/user-event/dist/utils'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(true)
  
  const handleClick = (selectedIndex) => {
    
      
      
      if(squares[selectedIndex] === null && player === true) {
        squares[selectedIndex] = "❌" 
        setSquares([...squares])
        setPlayer(false)
        // setWinner(player[winner])
      }else if(squares[selectedIndex] === null && player === false){
        squares[selectedIndex] = "⭕️"
        setSquares([...squares])
        setPlayer(true)
      } 
      
      // create a winner function
      // const calculateWinner = (squares) => {
        //   const lines = [
          //     [0, 1, 2],
          //     [3, 4, 5],
          //     [6, 7, 8],
          //     [0, 3, 6],
          //     [1, 4, 7],
          //     [2, 5, 8],
          //     [0, 4, 8],
          //     [2, 4, 6],
          //   ];
          //   for (let i = 0; i < lines.length; i++) {
            //     const [a, b, c] = lines[i];
            //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              //       return squares[a];
              //     }
              //   const winner = calculateWinner(squares)
      //   }
      //   return null;
      // }
} 


return (
  <>
      <h1>Tic Tac Toe</h1>
      <Square squares={squares}
       handleClick={handleClick} 
       />
       {/* {winner} */}
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