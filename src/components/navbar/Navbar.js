import './Navbar.css';
import Icon_nav from './icon-barra.png'
import {
    /*BrowserRouter as Router,
    Switch,
    Route,
    Link,*/
    NavLink
  } from "react-router-dom";

function Navbar(){
    return(
      <div>

      <nav className="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                
                <a className="navbar-brand" href='norreferrer'><img src={Icon_nav} className="img-fluid mx-3" alt="logo barra de navegación"/></a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-3" href="norreferrer">Equipo</a>
                        </li>
                        <li className="nav-item  ">
                            <a className="nav-link mx-3" aria-current="page" href="norreferrer">Servicios</a>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to="/perros" className="nav-link" activeClassName="active">Perros</NavLink>
                        </li>
                        <li className="nav-item dropdown mx-3">
                            <a className="nav-link dropdown-toggle" href="norreferrer" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Tips
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="noreferrer">Tips</a></li>
                              <li><a className="dropdown-item" href="norreferrer">Tips perros</a></li>
                              <li><a className="dropdown-item" href="norreferrer">Tips gatos</a></li>
                            </ul>
                        </li>
                        <li className="nav-item mx-3">
                        <a className="nav-link" href="norreferrer">Contacto</a>
                        </li>
                    </ul>
                
                    <form className="d-flex ">
                        <input className="form-control mx-2" type="search" placeholder="Qué deseas buscar" aria-label="Search"/>
                        <button className="btn btn-outline-success me-2" type="submit">Buscar</button>
                    </form>
                </div>
        
            </div>
        </nav>
      </div>
        );
      }

      export default Navbar;


      /*<nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link" activeClassName="active"> Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/equipo" className="nav-link" activeClassName="active"> Equipo</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/servicios" className="nav-link" activeClassName="active"> Servicios</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/perros" className="nav-link" activeClassName="active"> Perros</NavLink>
              </li>
              <li className="nav-item">
              <Link to="/contacto" className="nav-link"> Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>*/