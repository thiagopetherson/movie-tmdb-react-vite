import { Outlet } from 'react-router-dom' // Importando do React Router Dom
import Navbar from './components/Navbar'

import './App.css'

function App() {

  return (
    <div className="App">
     <Navbar />
     <Outlet />
    </div>
  )
}

export default App
