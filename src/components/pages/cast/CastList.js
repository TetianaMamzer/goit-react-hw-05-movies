const CastList = ({ cast }) => {
  return cast.map(({ id, character, name, profile_path }) => {
    const image = `https://image.tmdb.org/t/p/w500${profile_path}`;
    return (
      <li key={id}>
        <img src={image} alt={name} width='150' height='200'/>
        <h3>{name}</h3>
        <p>{character}</p>
      </li>
    );
  });
};

export default CastList;
