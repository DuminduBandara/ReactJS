import React from 'react';

const App = () => {

  const sayApp = (name) => {
    const date = new Date();
    const hours = date.getHours();

    let timeOfDay;
    if(hours >=4 && hours < 12){
      timeOfDay = "Good morning"
    }else if(hours >=12 && hours < 17){
      timeOfDay = "Good Afternoon"
    }else if(hours >=17 && hours < 20){
      timeOfDay = "Good evening"
    }else{
      timeOfDay = "Good Night"
    }

    return `${timeOfDay} ${name}!`;
  }

  return(

    <div className="app">
      {sayApp("Dumindu")}
    </div>

  );
}

export default App;