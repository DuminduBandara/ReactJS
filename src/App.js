import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import State from './state';
import Output from './outputList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
      <div className="state">
        <State/>
      </div>
      <div className="output">
        <Output/>
      </div>
    </div>
  );
}

export default App;
