import React from 'react';



const App = () => {

  const [useData, setUseData] = React.useState({})

  fetch("http://swapi.dev/api/people/1")
  .then(res => res.json())
  .then(data => setUseData(data))

  return(
    <div>
      <pre>{JSON.stringify(useData, null, 2)}</pre>
    </div>
  );

}

export default App;