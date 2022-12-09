import React from 'react';
import Body from './components/body';
import Navbar from './components/Navbar'

const App = () => {


  const [data, setData] = React.useState("Jeo");



  
  return(

    <div>
      <Navbar data={data}/>
      <Body data={data}/>
    </div>
  );
}

export default App;