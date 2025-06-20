import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './store';

function App() {
  const count = useSelector(state => state.counter.counter); // fixed path
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}

export default App;
