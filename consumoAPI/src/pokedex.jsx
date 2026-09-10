import { useState } from "react";
import './pokedex.css';
import pokedexInterface from './pokedex/pokedexInterface.png'

function pokedex() {

    const [pokemon, alterarPokemon] = useState([])
    const [buscar, alterarBusca] = useState("")

    async function busca(){
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + buscar )
        const data = await response.json()
        console.log(data)
        alterarPokemon(data)
    }

    return ( 
        <div className="pokedex" >

        <img className="interface" src={pokedexInterface} />
        <h1>Pokedex</h1>
        <p>Digite o nome do seu pokemon favorito:</p>
        <input onChange={e => alterarBusca(e.target.value)}  placeholder="Ex: Vaporeon" />
        <button onClick={() => alterarPokemon(busca)} >Pesquisar</button>
        <hr/>

        <ul>
            <h1>Nome: {pokemon.name}</h1>
            <p>Tipo: {pokemon.types?.[0]?.type.name}</p>
            <img src={pokemon.sprites?.other.showdown.front_default} width={200} />
        </ul>


        </div>
     );
}

export default pokedex;