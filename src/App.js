import React from 'react';
import boxes from './components/box';
import BoxM from './components/BoxM';

const App = () => {


  const [squares, setSquares] = React.useState(boxes)

  const toggle = (id) => {
    setSquares(prevSquare => {
      const newSquare = []
      for(let i = 0; i < prevSquare.length; i++){
        const currentSquare = prevSquare[i]
        if(currentSquare.id === id){
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on
          }
          newSquare.push(updatedSquare)
        }else {
          newSquare.push(currentSquare)
        }
      }

      return newSquare
    })
  }

  const squareElement = squares.map(square => (
    <BoxM key={square.id} id={square.id} on={square.on} toggle={toggle}/>
  )) //if you add html inside function make sure to add '()' not '{}'

  return(

      <main>
        {squareElement}
      </main>

  );
}

export default App;