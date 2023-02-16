import { movieDetails } from 'components/Api';
import { useState, useEffect } from 'react';
import { Outlet, Link, useParams, useNavigate, useLocation } from 'react-router-dom';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchPosts = async () => {
      try {

        const results = await movieDetails(id);
        setMovie(results);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchPosts()
  }, [id]);


 if(movie) {
    const {
    genres,
    title,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = movie;
  const date = release_date.slice(0,4);

  const genre = genres.map((genre) => genre.name).join(', ');
  const noPosterImg =
  'https://freedesignfile.com/upload/2018/11/Characters-in-film-design-elements-background-vector-graphic-715.jpg';

  function generatePosterImg(poster_path) {
    if (poster_path === null) {
      return noPosterImg;
    }
    return `https://image.tmdb.org/t/p/w500${poster_path}`;
  }

  return ( <div className={css.container}>
    <button onClick={() => navigate(from)} className={css.button}> &#8880; Go back</button>
    <div className={css.flex}>
      <div><img src={generatePosterImg(poster_path)} width='250' height='350' alt={title} className={css.img}/></div>
      <div>
        <h2>{title} ({date})</h2>
        <p>Use Score: {vote_average.toFixed(1)}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genre}</p>
      </div>
    </div>
    <h3 className={css.text}>Additional information</h3>
    <ul className={css.group}>
      <Link to='cast' state={{from}} className={css.link}><li className={css.list}>Cast</li></Link >
      <Link to='reviews' state={{from}} className={css.link}><li className={css.list}>Reviews</li></Link >
    </ul>
    <Outlet/>
    </div>);
 }
};

export default MovieDetails;
