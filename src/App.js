import React from 'react';

const App = () => {

  const [result, setResult] = React.useState("yes");
  const [count, setCount] = React.useState(0);


  const func = ()=> {
    setResult("No");
  }

  // method01
  // const add = () => {
  //   setCount((oldValue) => {
  //     return oldValue + 1;
  //   })
  // }

  //method01 best way
  const add = () => {
    setCount(oldValue => oldValue + 1);
  }


  const remove = () => {
    setCount((oldValue) => {
      return oldValue - 1;
    })
  }

  return(

    <div className="app">
      <h1 onClick={func}>{count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>

    </div>

  );
}

export default App;