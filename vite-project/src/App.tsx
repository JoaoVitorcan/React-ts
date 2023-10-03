import { useState } from 'react'
import './App.css'

function App() {

const [count, setCount] = useState(0)
const [value, setValue] = useState('')

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
      <div>
        <input
        value = {value} // o valor do input é o valor do state que ira ser aletrado para vazio
        onChange={({target}) => setValue(target.value)}  //quando vc digitar no input, ele irá aleterar o valor do span
        />
        <span>{value}</span> {/* o valor do span será aleterado quando vc digitar no input */}
        <button onClick={() => setValue('')}> {/* quando vc clicar no botão, o valor do input será alterado para vazio */}
          Clear
        </button>
      </div>
    </>
  )
}

export default App
