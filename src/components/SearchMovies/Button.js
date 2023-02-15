import React from 'react';
import css from './SearchMovies.module.css';

const Button = ({ loader }) => {
  return (
    <button className={css.Button} onClick={() => loader()}>
      Loder more
    </button>
  );
};

export default Button;