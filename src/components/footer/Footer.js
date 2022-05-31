import './Footer.css'
import icon from './bx-buildings.svg';

function Footer() {
    return (
        <footer>
            <div class="caja-footer">
                <div class="cont-icon-text">
                    <img src={icon} alt=""></img>
                    <h3>Sedes</h3>
                    <p>Sede Kennedy</p>
                    <p>Sede Suba</p>
                    <p>Sede Fontibon</p>
                    <p>Sede Centro</p>
                </div>
                <div class="cont-icon-text">
                    <img src={icon} alt=""></img>
                    <h3>Sedes</h3>
                    <p>Sede Kennedy</p>
                    <p>Sede Suba</p>
                    <p>Sede Fontibon</p>
                    <p>Sede Centro</p>
                </div>
                <div class="cont-icon-text">
                    <img src={icon} alt=""></img>
                    <h3>Sedes</h3>
                    <p>Sede Kennedy</p>
                    <p>Sede Suba</p>
                    <p>Sede Fontibon</p>
                    <p>Sede Centro</p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;