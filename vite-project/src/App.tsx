import { useState } from "react";
import Team from "./components/Team";

function App() {
  const [flamengo, setFlamengo] = useState('')

  const handleClick = () => {
    setFlamengo(flamengo === 'VAI FLAMENGO!' ? '' : 'VAI FLAMENGO!');
  }


  return (
    <div className="App">
      <h1>Tudo sobre o flamengo</h1>
      <h2>O maior time do MUNDO!</h2>

      <button onClick={handleClick}>
        Flamengo
      </button>
      <h3>{flamengo}</h3>
      <br /><br />

      <label htmlFor="time">
        Time:
        <input type="text"
          id="time"
        />
      </label>
      <br /><br />


      <label htmlFor="gols">
        Gols:
        <input type="number"
          id="gols"
        />
      </label>
      <br /><br />

      <Team />
    </div>
  );
}

export default App;