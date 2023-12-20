import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllVideos } from '../../api/tmdbAPI';
import css from './Movie.module.css';

const Movie = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const movieIdUrl = `/movie/${movieId}?`;
    getAllVideos(movieIdUrl).then(movieById => {
      setMovieData(movieById.data);
    });
  }, [movieId]);

  return (
    <div className={css.movie}>
      <img
        src={
          movieData.poster_path
            ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}?`
            : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-1-476x700.jpg'
        }
        alt={movieData.title}
        height="400px"
        width="250px"
      />
      <div>
        <h2>{movieData.title}</h2>
        <p>User Score: {Math.round(movieData.vote_average * 10)}%</p>
        <h4>Overview</h4>
        <p>{movieData.overview}</p>
        <h4>Genres</h4>
        <ul>
          {movieData.genres &&
            movieData.genres.map(gen => <li key={gen.id}>{gen.name}</li>)}
        </ul>
      </div>
    </div>
  );
};
export default Movie;
