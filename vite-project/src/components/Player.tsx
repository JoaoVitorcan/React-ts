type PlayerProps = {
    player : {
        nome: string,
        posicao: string,
        numero: number,
        golsMarcados: number,
        clubeAtual: string,
        contratoExpira: string
    } 
} 


function Player({player} : PlayerProps) {
    return (
        <div className="col-lg bg-dark text-white m-3">
            <h2>{player.nome}</h2>
            <p>{player.posicao}</p>
            <p>{player.numero}</p>
            <p>{player.golsMarcados}</p>
            <p>{player.clubeAtual}</p>
            <p>{player.contratoExpira}</p>

        </div>
    )
    
}

export default Player;