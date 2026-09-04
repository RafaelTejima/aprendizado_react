import { useState, useSyncExternalStore } from "react"

function Perfil(){

    let [handleProfile, handleProfileUpdate] = useState(false)
    let [mostrarAlterarSenha, mostrandoAlterarSenha] = useState(false)
    let [senhaAtual, setSenhaAtual] = useState("")
    let [novaSenha, setNovaSenha] = useState("")
    
    let usuario = {
        nome: "Abel",
        email: "genehackerman@gmail.com",
        senha: "123123"
    }

    function confirmar(){
        
        if(senhaAtual == usuario.senha){
            alert("sua senha foi alterada")
            mostrandoAlterarSenha(false)
        } else{
            alert("sua senha está incorreta")
        }

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
                <button onClick={ ()=> mostrandoAlterarSenha(!mostrarAlterarSenha)} >Alterar senha</button>
            </div>
                     
                : 
                <p></p>
                

            }

            {
                
                
                mostrarAlterarSenha == true ? 
                            
            <div>
                <h1>Alterar senha</h1>
                <p>Digite sua senha atual</p>
               <input onChange={ e => setSenhaAtual(e.target.value)}/>
                
                <p>Digite sua nova senha</p>
                <input/>
                <br/><br/>
                <button onClick={ ()=> confirmar()}>Confirmar</button>
            </div>

             :
                
           <p></p>

            }


        </div>
    )
}

export default Perfil