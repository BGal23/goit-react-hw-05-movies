import { useEffect, useState } from 'react';
import { getAllVideos } from '../../api/tmdbAPI';
import { Link, useLocation } from 'react-router-dom';

const TrendingMovies = () => {
  const [trendingState, setTrendingState] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const trendingUrl = '/trending/all/day?';
    getAllVideos(trendingUrl).then(trendingVideos =>
      setTrendingState(trendingVideos.data.results)
    );
  }, []);

  const trendingList = trendingState.map(video => (
    <li key={video.id}>
      <Link to={`movies/${video.id}`} state={{ from: location }}>
        {video.title || video.name}
      </Link>
    </li>
  ));
  return <ul>{trendingList}</ul>;
};
export default TrendingMovies;
