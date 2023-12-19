import { getAllVideos } from 'components/importApi';
import { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Searched = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedState, setSearchedState] = useState([]);
  const query = searchParams.get('query') || '';
  const location = useLocation();

  const handleSearch = event => {
    const filter = event.target.value;
    setSearchParams({ query: filter });
  };

  useEffect(() => {
    const searchUrl = `/search/movie?query=${query}&`;
    getAllVideos(searchUrl).then(search =>
      setSearchedState(search.data.results)
    );
  }, [query]);

  const searchedList = searchedState.map(video => (
    <li key={video.id}>
      <Link to={`${video.id}`} state={{ from: location }}>
        {video.title || video.name}
      </Link>
    </li>
  ));

  return (
    <>
      <div>
        <input type="text" value={query} onChange={handleSearch} />
      </div>
      <ul>{searchedList}</ul>
    </>
  );
};

export default Searched;
