import { useState } from "react"

function Game() {

    const [number, SetNumber] = useState(Math.floor(Math.random() * 5)) // generate random number between 0 and 5
    const [guess, SetGuess] = useState("") 
    const [attempts, SetAttempts] = useState(0)

    const handleClick = () => {
        if (Number(guess) === number) {
            alert("Você acertou!")
            SetNumber(Math.floor(Math.random() * 5))
            SetGuess("")
            SetAttempts(0)
        }else {
            alert("Você errou!")
            SetAttempts(attempts + 1)
        }
    }

    return (
        <div>
            <h1>Game</h1>
            <input 
             type="number" 
             value={guess} 
             placeholder="Digite um número" 
             onChange={({target}) => SetGuess(target.value)} /> {/*está pegando o valor digitado e transformando em número*/}
            <button onClick= {handleClick} >Guess the number</button>
                <span>Tentativas: {attempts}</span>
        </div>
    )
    
}

export default Game