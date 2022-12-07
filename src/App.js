// import React from 'react';

import Card from './components/Card';

const App = () => {
  return (

    <div className="App">
      <Card
        title="Title01"
        para = "Description01"
        isExist = {false}
      />
      <Card
        title="Title02"
        para = "Description02"
        isExist = {true}
      />
      <Card
        title="Title03"
        para = "Description03"
        isExist = {true}
      />
      <Card
        title="Title04"
        para = "Description04"
        isExist = {true}
        comment = {[{author: "", body: "", desc: ""}]}
      />
    </div>

  );
}

export default App;