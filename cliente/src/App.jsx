import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/auth/Login'
import Registro from './components/auth/Registro'
import Contactos from './components/contactos/Contactos'

import ContactoState from './context/contactos/contactoState'

function App() {

  return (
    <ContactoState>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </Router>
    </ContactoState>  
  );
}

export default App
