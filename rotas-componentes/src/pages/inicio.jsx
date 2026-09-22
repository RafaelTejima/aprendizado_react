import MenuSuperior from "../components/menuSuperior";
import Rodape from "../components/Rodape";
import Produto from "../components/produto";

import ervaVerde from "../assets/ervaVerde.png";
import ervaVermelha from "../assets/ervaVermelha.png";
import ervaAzul from "../assets/ervaAzul.png";

function Inicio() {

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
        <Produto nome="Erva Verde" descricao="Ela cura um pouco a sua vida." imagem={ervaVerde} />
        <Produto nome="Erva Vermelha" descricao="Ela não cura sem você combinar com a verde, ou a azul." imagem={ervaVermelha} />
        <Produto nome="Erva Azul" descricao="Se você por acaso se envenenou, você deveria usar essa erva junto da verde ou da vermelha. É recomendado" imagem={ervaAzul}/>
      </div>
      <Rodape/>
    </div>

   );
}

export default Inicio;