import './App.css'
import Player from './components/Player'

const jogador = {
  nome: "Gabigol",
  posicao: "Atacante",
  numero: 9,
  golsMarcados: 30,
  clubeAtual: "Flamengo",
  contratoExpira: "2024-12-31"
};

const jogador2 = {
  nome: "Bruno Henrique Pinto",
  posicao: "Atacante",
  numero: 27,
  golsMarcados: 50,
  clubeAtual: "Flamengo",
  contratoExpira: "2023-12-31"
};

const jogador3 = {
  nome: "Giorgian De Arrascaeta",
  posicao: "Meio-campista",
  numero: 14,
  golsMarcados: 35,
  clubeAtual: "Flamengo",
  contratoExpira: "2024-12-31"
};

const jogador4 = {
  nome: "Pedro Guilherme Abreu dos Santos",
  posicao: "Atacante",
  numero: 21,
  golsMarcados: 25,
  clubeAtual: "Flamengo",
  contratoExpira: "2025-12-31"
};

function App() {


  return (
    <div className="container-fluid p-5">
      <h1 className="text-center display-5">Jogadores do Flamengo</h1>

      <div className='row'>
        <Player
          player={jogador}
        />

        <Player
          player={jogador2}
        />

      <Player
        player={jogador3}
      />

      <Player
        player={jogador4}
      />
      </div>

      <div className='row'>
        <Player
          player={jogador}
        />

        <Player
          player={jogador2}
        />

      <Player
        player={jogador3}
      />

      <Player
        player={jogador4}
      />
      </div>
    </div>
  )
}

export default App
