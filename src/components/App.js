import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import Home from './pages/home/Home';
import Movies from './pages/movies/Movies';
import MovieDetails from './pages/movieDetails/MovieDetails';
import Cast from './pages/cast/Cast';
import Reviews from './pages/reviews/Reviews';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
