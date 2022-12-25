import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions';

const App = () => {

  const counter= useSelector(state => state.counter);
  const login = useSelector(state => state.login);
  const dispatch = useDispatch();

  return(
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
 
export default App;