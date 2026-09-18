import { useEffect, useState } from "react";
import { supabase } from "./Supabase";
import "./Empresas.css";

function Empresas() {
    const [empresas, altereEmpresas] = useState([]);
    const [funcionarios, alteraFuncionarios] = useState([]);

    const [exibeFuncionarios, altereexibirFuncionario] = useState(false);
    const [exibeEmpresas, altereexibirEmpresas] = useState(true);
    const [exibeModal, altereExibeModal] = useState(false);

    const [idEmpresa, alteraIdEmpresa] = useState("")
    const [nome, alterarNome] = useState("")
    const [cargo, alterarCargo] = useState("1")
    const [contato, alterarContato] = useState("")

    async function inserirFuncionario() {
        const obj = {
            id_empresa: parseInt(idEmpresa),
            nome: nome,
            contato: contato,
            cargo: parseInt(cargo)
        }
        
        const { error } = await supabase.from("funcionarios").insert(obj);

        if(error == null){
            alert("Funcionário registrado com sucesso!")
            altereExibeModal(false)
            buscaFuncionariosPorEmpresa(idEmpresa)
        } else{
            alert("Erro ao cadastrar funcionário. Entre em contato com o suporte técnico.")
            console.log(error)
        }
    }

    async function buscatodasEmpresas() {
        const { error, data } = await supabase.from("empresas").select();
        if (error) console.error("Erro ao buscar empresas:", error);
        else altereEmpresas(data || []);
    }

    async function buscatodosFuncionarios() {
        const { error, data } = await supabase
            .from("funcionarios")
            .select("nome, cargo, id, contato, empresas(nome, endereco)");

        if (error) console.error("Erro ao buscar funcionários:", error);
        else alteraFuncionarios(data || []);
    }

    async function buscaFuncionariosPorEmpresa(id_empresa) {

        const { error, data } = await supabase
            .from("funcionarios")
            .select("nome, cargo, id, contato, empresas(nome, endereco)")
            .eq("id_empresa", id_empresa);

        if (error) {
            console.error("Erro ao buscar funcionários por empresa:", error);
            return;
        }

        alteraIdEmpresa(id_empresa)
        alteraFuncionarios(data || []);

        altereexibirEmpresas(false);
        altereexibirFuncionario(true);
    }

    function alternaVizualizacao() {
        if (exibeEmpresas) {
            altereexibirEmpresas(false);
            altereexibirFuncionario(true);
        } else {
            buscatodosFuncionarios();
            altereexibirEmpresas(true);
            altereexibirFuncionario(false);
        }
    }

    useEffect(() => {
        buscatodasEmpresas();
        buscatodosFuncionarios();
    }, []);

    return (
        <div>

            {
                exibeModal == true ?
                    <div>


                        <div onClick={() => altereExibeModal(false)} className="fundoPreto" ></div>
                        <div className="modal" >
                            <h2>Novo funcionário</h2>
                            <input onChange={e=> alterarNome(e.target.value)} placeholder="Nome..." />
                            <br />
                            <input onChange={e=> alterarContato(e.target.value)} placeholder="Contato..." />
                            <br />
                            <select onChange={ e=> alterarCargo(e.target.value)}>
                                <option value="1" >Funcionário comum</option>
                                <option value="0" >Administrador</option>
                            </select>
                            <br />
                            <button onClick={inserirFuncionario} >Salvar</button>

                        </div>
                    </div>

                    :

                    <p></p>
            }

            <h1>Relacionamento de Tabelas</h1>
            <p>Consulta na tabela empresas e funcionários</p>
            <hr />

            {exibeEmpresas && (
                <div>
                    <h2>Empresas</h2>
                    <table border="1">
                        <thead>
                            <tr>
                                <th><strong>ID:</strong></th>
                                <th><strong>Nome:</strong></th>
                                <th><strong>CNPJ:</strong></th>
                                <th><strong>Endereço:</strong></th>
                                <th><strong>Ações:</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            {empresas.map((i) => (
                                <tr key={i.id}>
                                    <td>{i.id}</td>
                                    <td>{i.nome}</td>
                                    <td>{i.cnpj}</td>
                                    <td>{i.endereco}</td>
                                    <td>
                                        <button onClick={() => {buscaFuncionariosPorEmpresa(i.id); alternaVizualizacao()}}>
                                            Ver funcionários
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <hr />
                </div>
            )}

            {exibeFuncionarios && (
                <div>
                    <h2>Funcionários</h2>
                    <button onClick={() =>{alternaVizualizacao(); alteraIdEmpresa("")}}>Voltar</button>
                    <button onClick={() => altereExibeModal(true)} >Cadastrar novo</button>
                    <br /><br />

                    <table border="1">
                        <thead>
                            <tr>
                                <th><strong>ID:</strong></th>
                                <th><strong>Nome:</strong></th>
                                <th><strong>Nome da Empresa:</strong></th>
                                <th><strong>Endereço da Empresa:</strong></th>
                                <th><strong>Cargo:</strong></th>
                                <th><strong>Contato:</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            {funcionarios.map((i) => (
                                <tr key={i.id}>
                                    <td>{i.id}</td>
                                    <td>{i.nome}</td>
                                    <td>{i.empresas?.nome || "Sem empresa"}</td>
                                    <td>{i.empresas?.endereco || "N/A"}</td>
                                    <td>{i.cargo === 0 ? "Administrador" : "Funcionário comum"}</td>
                                    <td>{i.contato}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Empresas;