import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Ruteo } from "./app/utilidades/rutas/Ruteo";
import { Cabecera } from "./app/contenedor/Cabecera";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Cabecera />
        <div className="container-fluid">
          <Ruteo />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

