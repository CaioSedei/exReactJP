import './style.css';
import Header from '../../componets/Header'
import Footer from '../../componets/Footer'
import List from '../../componets/List'
import Imagens from '../../componets/Images'
import Form from '../../componets/Form'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
          
            <main>

                <List />
                <List titulo='mingal' />

                <Imagens />
                <Form />

                <Link to='/about'>
                    <button type="button">navegar</button>
                </Link>
            </main>


          
    
        </>
    )
}

export default Home