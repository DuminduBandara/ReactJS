import React from 'react';

const App = () => {

  const [data, setData] = React.useState(["Item 1", "Item 2"]);

  
  const addItem = () => {
    // method01
    setData(prevArray => [...prevArray, `Item ${prevArray.length + 1}`]);
    
    //method02
    // setData(prevArray =>{
    //    return [...prevArray, `Item ${prevArray.length + 1}`]
    //   });
    // }
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