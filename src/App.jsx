import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './componets/Footer'
import Header from './componets/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
