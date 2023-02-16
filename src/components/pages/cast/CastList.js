import css from './Cast.module.css';

const CastList = ({ cast }) => {
  return cast.map(({ id, character, name, profile_path }) => {

    const noPosterImg =
  'https://freedesignfile.com/upload/2018/11/Characters-in-film-design-elements-background-vector-graphic-715.jpg';

  function generatePosterImg(poster_path) {
    if (profile_path === null) {
      return noPosterImg;
    }
    return `https://image.tmdb.org/t/p/w500${profile_path}`;
  }

    return (
      <li key={id} className={css.list}>
        <img src={generatePosterImg()} alt={name} width='150' height='200' className={css.img}/>
        <h3>{name}</h3>
        <p>{character}</p>
      </li>
    );
  });
};

export default CastList;
