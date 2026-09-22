import './Produto.css'


function Produto(props) {
    return ( 

        <div className='produto' >
            <img src={props.imagem} />
            <br/>
            <h2>{props.nome}</h2>
            <p>{props.descricao}</p>
            <button>COMPRAR</button>
        </div>
     );
}

export default Produto;