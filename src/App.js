import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

const App = () => {
  return (

    <div className="App">
      <Navbar/>
      <Hero/>
      <Card
        image = "i3.svg"
        rating = "5"
        ratingCount = {6} // integer use {}
        country = "USA"
        title = "Life Lesson with Katie Zaferes"
        price = {100}

      />
      <Card
        image = "i2.svg"
        rating = "4"
        ratingCount = {10} // integer use {}
        country = "Sri Lanka"
        title = "Life Lesson with Alaina"
        price = {200}

      />
    </div>

  );
}

export default App;