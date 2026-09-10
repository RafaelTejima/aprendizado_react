import { useState } from "react";
import './pokedex.css';
import pokedexInterface from './pokedex/pokedexInterface.png';

function Pokedex() {
    const [pokemon, alterarPokemon] = useState(null);
    const [buscar, alterarBusca] = useState("");

    async function busca() {
        if (!buscar) return;
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + buscar.toLowerCase());
        const data = await response.json();
        alterarPokemon(data);
    }

    return ( 
        <div className="pokedex-container">
            <img src={pokedexInterface} className="pokedex-moldura" alt="Moldura Pokedex" />
            
            <div className="pokedex-conteudo">
                <h1>Pokedex</h1>
                <p>Digite o nome do seu pokemon favorito:</p>
                
                <div className="pokedex-busca">
                    <input 
                        onChange={e => alterarBusca(e.target.value)}  
                        placeholder="Ex: Vaporeon" 
                    />
                    <br/>
                    <button onClick={busca}>Pesquisar</button>
                </div>

                <hr/>

                {pokemon && (
                    <div className="pokemon-info">
                        {pokemon.sprites?.other?.showdown?.front_default && (
                            <img 
                                src={pokemon.sprites.other.showdown.front_default} 
                                alt={pokemon.name}
                                className="pokemon-sprite" 
                            />
                        )}
                        <h2>Nome: {pokemon.name}</h2>
                        <p>Tipo: {pokemon.types?.[0]?.type.name}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Pokedex;