import { useState } from "react";

function Pokedex() {

    const [pokemon, alterarPokemon] = useState([])
    const [pesquisa, alterarPesquisa] = useState("")

    async function buscarPokemon(){
        const response = await fetch("https://pokeapi.co/api/v2/pokemon")
        const data = await response.json()
        console.log(data)
        buscarPokemon(data.pokemon)
    }


    
    return ( 

        <div>

            <h1>Pokedex</h1>
            <p>Pesquise pelo pokémon que deseja:</p>
            <input onChange={ e => alterarPesquisa(e.target.value)} placeholder="Ex: Vaporeon" />
            <button onClick={ () => alterarPokemon(pesquisa)} >🔎 Pesquisar</button>
            <button onClick={buscarPokemon} >teste</button>
            <hr/>

            <ul>
                <h1>Nome: *</h1>
                <p>Tipo: {} </p>
                <img src="" />
            </ul>

        </div>

);
}

export default Pokedex;