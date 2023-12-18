import { useLocation, Link } from 'react-router-dom';

import Movie from 'components/Movie/Movie';

const MovieDetails = () => {
  const location = useLocation();
  const from = location.state?.from ?? '/';

  return (
    <main>
      <Link to={from}>Go back</Link>
      <Movie />
    </main>
  );
};
export default MovieDetails;
