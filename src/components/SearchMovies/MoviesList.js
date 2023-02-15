
import React from 'react';
import css from './SearchMovies.module.css';
import { memo } from 'react';


import MoviesItems from './Moviesitems';

const MoviesList = ({ movies }) => {

    return (
      <div className={css.Searchbar}>
        <ul className={css.movies}>
          <MoviesItems movies={movies} />
        </ul>
      </div>
    );
};

export default memo(MoviesList);