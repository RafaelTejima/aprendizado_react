import { useState } from "react"

function Perfil(){

    let [handleProfile, handleProfileUpdate] = useState(false)
    let [mostrarAlterarSenha, mostrandoAlterarSenha] = useState(false)
    let [alterarSenha, senhaAlterada] = useState()

    let usuario = {
        nome: "Abel",
        email: "genehackerman@gmail.com",
        senha: "123123"
    }

    return(
        <div>
            <h1>Perfil de usuário</h1>
            <p>Veja aqui suas informações de perfil</p>
            <button onClick={ ()=> handleProfileUpdate(!handleProfile)} >Carregar perfil</button>

            <hr/>

            {
                handleProfile == true ? 

            <div>
                <p>Nome: {usuario.nome}</p>
                <p>Email: {usuario.email}</p>
                <button>Alterar senha</button>
            </div>
                     
                : 
                <p></p>
                

            }

                <div>
                    <h1>Alterar senha</h1>
                    <p>Digite sua senha atual</p>
                    <input/>

                    <p>Digite sua nova senha</p>
                    <input/>
                    <br/>
                    <button>Confirmar</button>
                </div>

        </div>
    )
}

export default Perfil