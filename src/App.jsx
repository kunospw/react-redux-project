import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './store'

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(increment())}>-</button>
    </>
  )
}

export default App
