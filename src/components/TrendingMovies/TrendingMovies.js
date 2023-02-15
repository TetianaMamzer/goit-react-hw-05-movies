import { trendingFilms } from "components/Api"
import { useState, useEffect } from 'react';
import css from './TrendingMovies.module.css'

import MoviesList from "components/SearchMovies/MoviesList";


function TrendingMovies () {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {

  const fetchPosts = async () => {
    try {
      const data = await trendingFilms();

      setMovies(data.results);

    } catch (error) {
      setError(error.message);
    }
  };

  fetchPosts();


  }, []);

  
  return (
    <div>
      <MoviesList movies={movies} />
      {error && <h2 className={css.title}>{error}</h2>}
    </div>
  );
}

export default TrendingMovies;