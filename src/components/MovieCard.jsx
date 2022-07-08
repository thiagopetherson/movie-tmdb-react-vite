import { Link } from 'react-router-dom' // Importando do React Router Dom
import { FaStar } from 'react-icons/fa' // Importando do React Icons

// Pegando valores da variável de ambiente do .env
const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
    return (
      <div className="movie-card">
            <img src={ imagesURL + movie.poster_path } alt={ movie.title } />
            <h2>{ movie.title }</h2>
            <p><FaStar /> { movie.vote_average }</p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
      </div>
    )
}

export default MovieCard