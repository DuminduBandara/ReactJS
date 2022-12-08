import React from 'react';

const App = () => {

  const [data, setData] = React.useState(["array01", "array02"]);

  
  const addItem = () => {
    const dataText = `array${data.length + 1}`;
    setData(prevState => [...prevState, dataText])
  }
  const getArray = data.map(data => <p key={data}>{data}</p>);

  return(

    <div className="app">
      <button onClick={addItem}>Add Array</button>
      {getArray}
    </div>

  );
}

export default App;