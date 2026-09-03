import { useState } from "react"

function App() {

  let [cliques, setCliques] = useState(0)
  let [nome, setNome] = useState("aguardando...")

  function aumentarCliques(){
    setCliques(cliques + 1)
  }

  function mostrarNome(){
    setNome(nome = "Rafael")
  }

  return (
   <div>
    <h1>Olá Mundo!</h1>
    <p>Estou aprendendo React xD</p>
    <p>Meu nome é: {nome} </p>
    <button onClick={mostrarNome}>Mostrar nome</button>
    <hr/>

    <p>Você clicou <strong>{cliques}</strong> vezes</p>
    <button onClick={aumentarCliques} >Clique aqui</button>
   </div>
  )
}

export default App
