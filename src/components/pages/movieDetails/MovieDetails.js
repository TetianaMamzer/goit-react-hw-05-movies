import { movieDetails } from 'components/Api';
import { useState, useEffect } from 'react';
import { Outlet, Link, useParams, useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  const navigate = useNavigate();


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

  return ( <>
    <button onClick={() => navigate(-1)}>Go back</button>
    <div>
      <div><img src={generatePosterImg(poster_path)} width='250' height='350' alt={title}/></div>
      <div>
        <h2>{title} ({date})</h2>
        <p>Use Score: {vote_average.toFixed(1)}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genre}</p>
      </div>
    </div>
    <h3>Additional information</h3>
    <ul>
      <Link to='cast'><li>Cast</li></Link >
      <Link to='reviews'><li>Reviews</li></Link >
      <Outlet/>
    </ul>
    </>);
 }
};

export default MovieDetails;
