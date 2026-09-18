import { useEffect, useState } from "react"
import { supabase } from "./Supabase"

function App() {

  const [produtos, alteraProdutos] = useState([])

  const [nome, alterarNome] = useState("")
  const [preco, alterarPreco] = useState("")
  const [tamanho, alterarTamanho] = useState("")
  const [descricao, alterarDescricao] = useState("")

  async function inserir(){
    const obj = {
      nome: nome,
      preco: preco,
      tamanho: tamanho,
      descricao: descricao
    }
    const { data, error } = await supabase.from('produtos').insert(obj)
    alert("produto adicionado")
    document.location.reload()
  }

  async function buscaTodos(){
    const { data, error } = await supabase.from('produtos').select().order("id", {ascending: false})
    console.log(data)
    alteraProdutos(data)
  }

  useEffect( ()=>{
    buscaTodos()
  }, [] )

  return (

   <div>

    <h1>Conexão com Supabase</h1>

      <input onChange={e => alterarNome(e.target.value)} placeholder="Nome do produto..."/>
  <br/>
  <br/>
      <input onChange={e => alterarPreco(e.target.value)} placeholder="Preço..."/>
  <br/>
  <br/>
      <input onChange={e => alterarTamanho(e.target.value)} placeholder="Tamanho..."/>
  <br/>
  <br/>
      <input onChange={e => alterarDescricao(e.target.value)} placeholder="Descrição (opcional)"/>
  <br/>
  <br/>
      <button onClick={inserir} >Salvar</button>

    {
      produtos.map( i => <p>Nome do produto: {i.nome} - <strong>R$ {i.preco}</strong> | {i.descricao} </p> )
    }

   </div>

  )
}

export default App
