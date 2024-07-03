import { useState } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import './App.css'


function App() {
  const dispatch = useDispatch()
  const num = useSelector((state) => {
    console.log(state)
    return state.num
  })


  return (
      <div>
        {num}
        <hr />    
        <button
          aria-label="Increment value"
          onClick={() => dispatch({
            type: "INCREMENT_ASYNC"
          })}
        >
          Increment
        </button>
        <hr />   
        <button
          aria-label="Minus value"
          onClick={() => dispatch({
            type: "MINUS_ASYNC"
          })}
        >
          Minus
        </button> 
      </div>
  )
}

export default App
