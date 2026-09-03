import { useState } from "react"

function Formularios(){

    let [nome, setNome] = useState()
    let [idade, setIdade] = useState()
    let [cidade, setCidade] = useState()
    let [estado, setEstado] = useState()

    function salvar(){

        if(nome == ""){
            alert("Nome inválido.")
            return   
        }

        if(idade <= 0){
            alert("Idade inválida")
            return
        }

        if(cidade == ""){
            alert("Cidade inválida")
            return
        }

        if(estado == ""){
            alert("Estado inválido")
            return
        }

        alert("seja bem vindo(a)! " +nome+ "\nVocê tem " +idade+ " anos" + "\nMora em " +cidade+ "\nDo estado de " +estado)        
    }

    return(
        <div>

            <h1>Página de formulário</h1>
            <p>Aprendendo a usar o input no React</p>

            <p>Digite seu nome: </p>
            <input onChange={ e => setNome(e.target.value) }/>
            <br/>

            <p>Digite sua idade: </p>
            <input onChange={e => setIdade(e.target.value)}/>

            <br/>
            <p>Digite onde mora </p>
            <input placeholder="Cidade" onChange={e => setCidade(e.target.value)} />
            <input placeholder="Estado" onChange={e => setEstado(e.target.value)} />
            <br/>
            <br/>
            <button onClick={salvar}>Salvar</button> 
        </div>
    )
}

export default Formularios