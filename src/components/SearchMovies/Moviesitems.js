import React from 'react';
import { Link } from 'react-router-dom';
import css from './SearchMovies.module.css';

const MoviesItems = ({ movies }) => {
  return movies.map(({ id, name, title }) => {
    return (
      <Link className={css.link} key={id} to={`/movies/${id}`}>
        <li className={css.movieList} >
          <h2 className={css.title}>{name || title}</h2>
        </li>
      </Link>
    );
  });
};

export default MoviesItems;
