import React from 'react'

const Square = ({squares, handleClick}) => {
  return (
    <div className="grid">
      {squares.map((board, index) => {
        console.log("board", board, index);
        return(
            <div
             className="square" 
              key={index}
               onClick={()=> handleClick(index)}
               >
                {board}
            </div>
        )
      })}
     
    </div>
    )
}
export default Square
