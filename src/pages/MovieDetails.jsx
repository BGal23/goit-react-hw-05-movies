import { useLocation, NavLink, Link, Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import Movie from 'components/Movie/Movie';

const StyledLink = styled(NavLink)`
  &.active::after {
    content: '⇩';
  }
`;

const MovieDetails = () => {
  const [from, setFrom] = useState();
  const location = useLocation('/');

  useEffect(() => {
    if (
      location.pathname.includes('cast') ||
      location.pathname.includes('reviews')
    ) {
    } else {
      setFrom(location.state?.from || '/');
    }
  }, [location]);

  return (
    <main>
      <Link to={from}>⇦ Go back</Link>
      <br />
      <br />
      <Movie />
      <div>
        <h4>Additional information</h4>
        <StyledLink to="cast">Cast</StyledLink>
        <br />
        <StyledLink to="reviews">Reviews</StyledLink>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default MovieDetails;
