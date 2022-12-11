import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';


const App = () => {

  const [darkMode, setDarkMode] = React.useState(true)
 
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  }

  return(

    <div className="app">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode}/>
    </div>

  );
}

export default App;