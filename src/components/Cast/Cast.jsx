import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllVideos } from '../../api/tmdbAPI';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [creditsData, setCreditsData] = useState([]);

  useEffect(() => {
    const movieIdUrl = `/movie/${movieId}/credits?`;
    getAllVideos(movieIdUrl).then(movieById => {
      setCreditsData(movieById.data.cast);
    });
  }, [movieId]);

  const castList = creditsData.map(actor => (
    <li className={css.actor} key={actor.id}>
      <img
        width="120px"
        height="170px"
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
            : 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
        }
        alt={actor.original_name}
      />
      <p>{actor.original_name}</p>
      <p>{actor.character}</p>
    </li>
  ));

  return <ul className={css.cast}>{castList}</ul>;
};
export default Cast;
