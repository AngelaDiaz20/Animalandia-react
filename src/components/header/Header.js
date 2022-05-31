import './Header.css';
import Logo from './logo.jpg';

function Header(){
return (
    /*caracteristicas del componente*/
    <header>
        <div className="logo">
          <img src={Logo} alt="Logo de animalandia"></img>
        </div>
        <div className='buttons-header'>
          <button class="btn-azul"><i class="fa-solid fa-door-open"></i>Ingresar</button>
          <button class="btn-morado"><i class="fas fa-user-plus"></i>Registrar</button>
        </div>
    </header>
    );
}
export default Header;
