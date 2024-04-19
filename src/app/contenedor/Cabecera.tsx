import { NavLink } from "react-router-dom";
import miLogo from "../../assets/img/4043233-anime-away-face-no-nobody-spirited_113254.ico";

export const Cabecera = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={miLogo} alt="El Logo" className="logo-img" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="*">
                Películas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/acer">
                Acerca de...
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
