import { useState } from 'react' // Importando o Hook
import { Link, useNavigate } from 'react-router-dom' // Importando do React Router Dom
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi' // Importando do React Icons

import './Navbar.css'

const Navbar = () => {

    const [search, setSearch] = useState("") // Estado

    const navigate = useNavigate() // Adicionando funções de redirecionamento no componente

    // Método
    const handleSubmit = (e) => {
        e.preventDefault()     
        
        if ( !search ) return

        navigate(`/search?q=${search}`, { replace: true }) // Redirecionando
        setSearch("")
    }
    
    return (
        <navbar id="navbar">
            <h2>
                <Link to="/">
                    <BiCameraMovie /> MoviesLib
                </Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Busque um filme"  onChange={(e) => setSearch(e.target.value)} value={search} />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </navbar>
    )
}

export default Navbar