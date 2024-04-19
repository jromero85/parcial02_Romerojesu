import { Route, Routes} from "react-router-dom";
import { Cabecera } from "../../contenedor/Cabecera.tsx";
import { Inicio } from "../../contenedor/Inicio.tsx";

export const Ruteo = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/" element={<Cabecera/>} />
        </Routes>
    )
}