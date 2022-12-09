import React from 'react';
import boxes from './components/box';
import BoxM from './components/BoxM';

const App = () => {


  const [squares, setSquares] = React.useState(boxes)



  const squareElement = squares.map(square => (
    <BoxM key={square.id} on={square.on}/>
  )) //if you add html inside function make sure to add '()' not '{}'



  
  return(

      <main>
        {squareElement}
      </main>

  );
}

export default App;