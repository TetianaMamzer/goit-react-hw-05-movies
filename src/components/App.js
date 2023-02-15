import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './SearchMovies/Loader';

const Navbar = lazy(() => import('./navbar/Navbar'));
const Home = lazy(() => import('./pages/home/Home'));
const Movies = lazy(() => import('./pages/movies/Movies'));
const MovieDetails = lazy(() => import('./pages/movieDetails/MovieDetails'));
const Cast = lazy(() => import('./pages/cast/Cast'));
const Reviews = lazy(() => import('./pages/reviews/Reviews'));

function App() {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies" >
      <Navbar />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
