import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Contato from "./pages/contato";

function App() {

  return (

    <div>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/contato" element={<Contato/>} />
          </Routes>
        </BrowserRouter>

    </div>

   );
}

export default App;