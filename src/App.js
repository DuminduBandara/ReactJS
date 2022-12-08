import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Data from './components/data';

const App = () => {
  const DataInput = Data.map(data => {
    return <Card
      key={data.id}
      {...data}
    />
  })

  return (

    <div className="App">
      <Navbar/>
      <div className="cardList">
        {DataInput}
      </div>
    </div>

  );
}

export default App;