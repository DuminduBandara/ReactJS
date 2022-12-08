import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './components/data';

const App = () => {
  const DataInput = Data.map(data => {
    return <Card
      key={data.id}
      image={data.image}
      rating={data.rating}
      ratingCount ={data.ratingCount}
      country ={data.country}
      title ={data.title}
      price ={data.price}
      openSpots ={data.openSpots}
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