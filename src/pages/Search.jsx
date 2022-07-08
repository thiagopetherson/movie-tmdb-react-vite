import { useEffect, useState } from 'react' // Importando Hooks
import { useSearchParams } from 'react-router-dom' // Permite pegar parâmetros
import MovieCard from '../components/MovieCard'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import "./MoviesGrid.css" // Importando o CSS

const Search = () => {

    const [searchParams] = useSearchParams() // Pegando o Hook

    const [movies, setMovies] = useState([]) // Estado
    const query = searchParams.get("q") // Pegando o parâmetro "q" que vem da URL

    const getSearchedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data.results)
        setMovies(data.results)
    }

    // Lifecicle
    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}` // Mostando a url que busca os filmes melhores avaliados       
        getSearchedMovies(searchWithQueryURL)

    }, [query])

    return (
        <div className="container">
            <h2 className="title">Resultados para: <span className="query-text">{ query }</span></h2>
            <div className="movies-container">              
                {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Search;