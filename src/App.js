import React from 'react';



const App = () => {

  const [useData, setUseData] = React.useState({})
  const [count, setCount] = React.useState(1)

  React.useEffect(() => {
    fetch(`http://swapi.dev/api/people/${count}`)
    .then(res => res.json())
    .then(data => setUseData(data))

  }, [count])


  return(
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
      <pre>{JSON.stringify(useData, null, 2)}</pre>
    </div>
  );

}

export default App;