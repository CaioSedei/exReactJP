import { Link } from 'react-router-dom';
import './style.css';

function About() {
    return (
        <>
            <h1>Pagina Sobre</h1>

            <Link to ='/'>
                <button>navegar para home</button>
            </Link>

        </>
    )
}

export default About