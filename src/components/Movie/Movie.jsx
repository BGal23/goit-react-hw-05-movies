import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllVideos } from '../importApi';

const Movie = () => {
  const { movieId } = useParams();

  useEffect(() => {
    const movieIdUrl = `/movie/${movieId}`;
    getAllVideos(movieIdUrl).then(movieById => createMovieInfo(movieById.data));
  }, [movieId]);

  const createMovieInfo = async data => {
    //movieInfo = await `<div>${data.title}</div>`;
    await console.log(data);
    return;
  };

  return <div></div>;
};
export default Movie;
