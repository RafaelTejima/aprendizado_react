function App() {

  let cliques = 0 // useState

  let nome = "Rafael"
  let cidade = "São Carlos"
  let nome_completo = " Hiroshi Tejima"


  function contarCliques(){
    cliques += 1
    
  }


  return (
   <div>
    <h1>Olá {2+2} Mundo!</h1>
    <p>Estou apren{console.log("flores")}dendo React xD</p>
    <hr/>
    <p>Meu nome é {nome} {nome_completo} sou da cidade de {cidade}.</p>
        
    <hr/>

    <p>Você clicou <strong>{cliques}</strong> vezes</p>
    <button onClick={contarCliques} >Clique aqui</button>
   </div>
  )
}

export default App
