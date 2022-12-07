// import React from 'react';

import Card from './components/Card';
import ArrayData from './components/arrayMapData';
const App = () => {

  const arrayElement = ArrayData.map(data => {
    return <Card country={data.Country} capital={data.Capital}/>
  })

  return (

    <div>
      {arrayElement}
    </div>
    

  );
}

export default App;