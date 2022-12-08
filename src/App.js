import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './components/data';

const App = () => {
  const DataInput = Data.map(data => {
    return <Card
      key={data.id}
      // data = {data} method01
      {...data} //method02
    />
  })

  return (

    <div className="App">
      <Navbar/>
      <Hero/>
      <div className="cardList">
        {DataInput}
      </div>
    </div>

  );
}

export default App;