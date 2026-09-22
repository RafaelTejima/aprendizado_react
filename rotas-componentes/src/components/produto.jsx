import './Produto.css'

function Produto() {
    return ( 

        <div className='produto' >
            <img src="https://placehold.co/150" />
            <br/>
            <h2>Nome do Produto</h2>
            <p>Descrição</p>
            <button>COMPRAR</button>
        </div>
     );
}

export default Produto;