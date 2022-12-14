import logo from '../../img/logo.svg';
import './style.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta-2022</h1>
                <p>Desenvolvido por 
                    <a href="https://www.instagram.com/glaubermlira"> @glaubermlira</a>
                </p>
            </div>
        </header>
    )
}

export default Header;