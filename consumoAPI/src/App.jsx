import { useState } from "react";

function App() {

    const [usuarios, alterarUsuarios] = useState([])
    const [mostrarLista, mostrandolista] = useState(false)

    async function buscarTodos(){

        const response = await fetch("https://dummyjson.com/users")
        const data = await response.json()
        console.log(data)
        alterarUsuarios(data.users)

    }

    function mostrarInformações(usuario){
        alert("telefone: " + usuario.phone + "\nemail: " + usuario.email + "\nmora em: " + usuario.address.city + " - " + usuario.address.state)
    }

    return (

        <div>

            <h1>Consumo da API</h1>
            <p>Buscando dados da API DummyJSON</p>
            <button onClick={buscarTodos} >Carregar dados</button>

            <ul>
                {
                    usuarios.length == 0 ? 
                        <p>lista vazia...</p>
                    :
                        usuarios.map(
                            i =>  <li><img src={`https://ui-avatars.com/api/?background=random&name=${i.firstName}+${i.lastName}&size=40&rounded=true`}/> {i.gender == "male" ? "Sr. " : "Sra. "} {i.firstName} tem {i.age} anos <button onClick={ ()=> mostrarInformações(i)}>Ver informações</button> </li>
                        )
                    } 
            </ul>

        </div>

    );
}

export default App