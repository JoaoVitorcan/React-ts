import { useState } from 'react'
import './App.css'

function App() {

const [count, setCount] = useState(0)

const handleClickBack = () => {
  if (count > 0) {
    setCount(count - 1)
  } else {
    alert('Count cannot be less than 0')
  }
}

const handleClickNext = () => {
  setCount(count + 1)
}

  return (
    <>
      <div>
        <button onClick={handleClickBack}>
          -
        </button>
        <span>{count}</span>
        <button onClick={handleClickNext}>
          +
        </button>
      </div>
    </>
  )
}

export default App
