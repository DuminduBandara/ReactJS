// import React from 'react';

import Card from './components/Card';

const App = () => {
  return (

    <div className="App">
      <Card
        image="./images/cat1.jpg"
        name="Mr. Doggy"
        phone="(+94) 21-234321"
        email="Mr.Doggy"
      />
      <Card
        image="./images/cat2.jpg"
        name="Mr. Kitty"
        phone="(+94) 21-234321"
        email="Mr.Doggy"
      />
      <Card
        image="./images/cat2.jpg"
        name="Mr. Meow"
        phone="(+94) 21-234321"
        email="Mr.Doggy"
      />
      <Card
        image="./images/cat1.jpg"
        name="Mr. Doggy"
        phone="(+94) 21-234321"
        email="Mr.Doggy"
      />
    </div>

  );
}

export default App;