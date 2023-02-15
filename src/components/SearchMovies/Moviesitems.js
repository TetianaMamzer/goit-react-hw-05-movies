import {React, memo} from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './SearchMovies.module.css';

const MoviesItems = ({ movies }) => {

  const location = useLocation();
  return movies.map(({ id, name, title }) => {
    return (
      <Link className={css.link} key={id} to={`/movies/${id}`} state={{from: location}}>
        <li className={css.movieList} >
          <h2 className={css.title}>{name || title}</h2>
        </li>
      </Link>
    );
  });
};

export default memo(MoviesItems);
