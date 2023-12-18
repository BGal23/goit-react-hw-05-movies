import { Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';
import Home from './pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MenuBar />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
