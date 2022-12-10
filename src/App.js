import React from 'react';
import WindowTracker from './components/window'


const App = () => {

  const [show, setShow] = React.useState(true)

  const toggle = () => {
    setShow(prevShow => !prevShow)
  }

  return (
    <div>
        <button onClick={toggle}>Toggle Window</button>
        {show && <WindowTracker/>}
    </div>  
  );
}

export default App;