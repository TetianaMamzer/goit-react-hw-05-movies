import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'components/Api';
import css from './SearchMovies.module.css';


import Searchbar from './Search';
import MoviesList from './MoviesList';
import Loader from './Loader';
import Button from './Button';

function SearckMovies () {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [isNothing, setIsNothing] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const nameMovie = searchParams.get('search')

  const loaderMore = () => {
    setPage(prevState => prevState + 1);
  };

  const searchInput = search => {
    if (search === nameMovie) {
      return;
    }
    setSearchParams({search});

    setMovies([]);
    setPage(1);
  };

  useEffect(() => {

    if (nameMovie) {

      const fetchPosts = async () => {
        try {
          setLoading(true);
          
          const data = await searchMovies(nameMovie, page);

          if(page > 1) {
           return  setMovies(movies => [...movies, ...data.results]);
          }

          setMovies([...data.results]);
          setTotal(data.total_results);
          setIsNothing(true);
          console.log(data)
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchPosts();
    }
  }, [nameMovie, page]);

const totalPage = Math.floor(total / 20);
console.log(totalPage)
  return (
    <div className={css.Searchbar}>
      <Searchbar onSubmit={searchInput} />
      <MoviesList movies={movies} />
      {(total === 0 && isNothing) && (
        <>
          <h2 className={css.message}>За вашим запитом нічого не знайдено</h2>
          <img src='https://i.gifer.com/GT4C.gif' alt='nothing' className={css.gif}/>
        </>
      )}
      {error && <h2 className={css.title}>{error}</h2>}
      {loading && <Loader text="Loading..." />}

      {(movies.length > 0 && page < totalPage) && (
        <Button loader={loaderMore} type="button" />
      )}
    </div>
  );
  }

  export default SearckMovies;