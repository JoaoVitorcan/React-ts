import { useEffect, useState } from 'react'

type Search = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
};

function Batman() {

    const [data, setData] = useState<Search[] | null>(null);

    useEffect(() => {  //função que vai ser ativada quando o site for acessado
        const fetchData = async () => {  //função que vai fazer a requisição
            const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=batman')  //requisição
            const res = await req.json() //resposa da requisição
            setData(res.Search) //salva a resposta da requisição na variavel data
        }
        fetchData()
    }, [])

    if (!data) return <h1>Loading...</h1>

    return (
        <div>
            <h2>Batman</h2>
            {data.map((e) => (   //map para percorrer o array e mostrar os dados
                <div>
                    <h1>{e.Title}</h1>
                    <img src={e.Poster} alt="" />
                </div>
            ))}
        </div>
    )
}

export default Batman;