import { movieCredits } from 'components/Api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import CastList from './CastList';

const Cast = () => {
  const [cast, setCast] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const results = await movieCredits(id);
        setCast(results.cast);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchPosts();
  }, [id]);

  if (cast) {

    return (

        <ul>
          <CastList cast={cast} />
        </ul>

    );
  }
};

export default Cast;
