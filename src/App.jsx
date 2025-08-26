import './App.css'
import Header from './componets/Header'
import Footer from './componets/Footer'
import List from './componets/List'
import Imagens from './componets/Images'
import Form from './componets/Form'

function App() {
  return (
    <>
      <Header />
      {/* <!-- Conteudo da pagina --> */}
      <main>
        <List titulo = 'batata'/>
        <List titulo = 'mingal'/>

        <Imagens />

        <Form />
      </main>


      {/* <!-- Rodapé --> */}
      <Footer />
    </>
  )
}

export default App
