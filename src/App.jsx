import {useState} from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import Cart from './components/Cart'
import Pizza from './components/Pizza'

function App() {
    const [view, setView] = useState('home')
  
    return (
    <>
      
      <div className="App">
      <Navbar setView={setView} />

      {view === 'home' && <Home setView={setView} />}
      {view === 'register' && <Register />}
      {view === 'login' && <Login />}
      {view === 'cart' && <Cart />}
      {view === 'pizza' && <Pizza />}
      <Footer />
      </div>
    </>
  )
}
export default App
