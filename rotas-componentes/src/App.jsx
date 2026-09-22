import MenuSuperior from "./components/menuSuperior";
import Rodape from "./components/Rodape";
import Produto from "./components/produto";

function App() {

  const deck = {
    display: "flex",
    gap: 20,
  }

  return (

    <div>
      <MenuSuperior/>
      <h1>Rotas e componentes</h1>
      <p><strong>Rotas: </strong>permite criar páginas e navegação no site</p>
      <p><strong>Componentes: </strong>pequenas partes de site (layout) reutilizáveis</p>

      <div style={deck} >
        <Produto/>
        <Produto/>
        <Produto/>
      </div>
      <Rodape/>
    </div>

   );
}

export default App;