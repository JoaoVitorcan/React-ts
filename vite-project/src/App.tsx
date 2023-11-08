import './App.css'
import { useEffect, useState } from 'react'

type Search = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

function App() {
  const [data, setData] = useState<Search[] | null>(null);
  
  const [data2, setData2] = useState<Search[] | null>(null);



  useEffect (() => {  //função que vai ser ativada quando o site for acessado
    const fetchData = async () => {  //função que vai fazer a requisição
      const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=grandFather')  //requisição
      const res = await req.json() //resposa da requisição
     setData(res.Search) //salva a resposta da requisição na variavel data
    }
    const fetchData_2 = async () => {  //função que vai fazer a requisição
      const req = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=spiderMan')  //requisição
      const res = await req.json() //resposa da requisição
      console.log(res)
     setData2(res.Search) 
    }
    fetchData()
    fetchData_2() 
  },[])

  if(!data) return <h1>Loading...</h1>  
  if(!data2) return <h1>Loading...</h1>
  
  return (
    <>
    {data.map((e) => (   //map para percorrer o array e mostrar os dados
      <div>
        <h1>{e.Title}</h1>
        <img src={e.Poster} alt="" />
      </div>
    ))}
    {data2.map((e) => (
      <div>
        <h1>{e.Title}</h1>
      </div>
    ))}

    </>
  )
}

export default App
