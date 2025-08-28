import { Link } from 'react-router-dom'
import './style.css'

function Header() {
    return (<header id="cabeça">
        <h1>
            Minha primeira página HTML
        </h1>
        <nav>
            <ul>
                <Link to ='/'>
                    <li>inicio</li>
                </Link>
                <Link to ='/about'>
                    <li>proxima</li>
                </Link>
            </ul>
        </nav>
        {/* <a href="./page.html">outra pagina</a> */}
    </header>)
}

export default Header