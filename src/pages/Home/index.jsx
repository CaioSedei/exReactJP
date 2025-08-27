import './style.css';
import Header from '../../componets/Header'
import Footer from '../../componets/Footer'

function Home() {
    return (
        <>
            <Header />
            {/* <!-- Conteudo da pagina --> */}
            <main>
                <List />
                <List titulo='mingal' />

                <Imagens />

                <Form />
            </main>


            {/* <!-- Rodapé --> */}
            <Footer />
        </>
    )
}

export default Home