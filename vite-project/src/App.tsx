import { useState } from 'react';
import './App.css'

function App() {

  const toolKit = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Node',
    'Testes automatizados',
  ];

const [index, SetIndex] = useState(0)     // 0 é o valor inicial do index, SetIndex é a função que vai alterar o valor do index, useState vai criar o estado que vai começar em 0
const [lista, SetLista] = useState(toolKit) // lista é toolKit, SetLista é a função que vai alterar o valor de lista e a lista é toolkit

const handleClickNext = () => {   
  if (index + 1 < lista.length) {  // se o index for menor que o tamanho da lista, ele vai somar 1 ao index enquanto for menor que o tamanho da lista
    SetIndex(index + 1) // SetIndex vai alterar o valor do index, somando 1 ao index
  } 
  else {  // se o index for maior que o tamanho da lista, ele vai voltar para o index 0
    SetIndex(0)
  }
}

const handleClickBack = () => { 
  if (index - 1 >= 0) {  // se o index for maior ou igual a 0,  ele vai retornar para o ultimo index (numero) da lista
    SetIndex(index - 1) // SetIndex vai alterar o valor do index, subtraindo 1 ao index
  }
  else {
    SetIndex(lista.length -1) // se o index for menor que 0, ele vai retornar para o ultimo index (testes automatizados)
  }
} 


  return (
    <>
      <h1>Caixa de ferramantas</h1>
      <h2>{lista[index]}</h2>    {/* vai mostrar o index da lista */}
      <button onClick={handleClickBack}>anterior</button> {/* vai chamar a função handleClickBack */}
      <button onClick={handleClickNext}>proximo</button> {/* vai chamar a função handleClickNext */}
    </>
  )
}

export default App