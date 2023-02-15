import { movieReviews } from "components/Api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ReviewsList from './ReviewsList';

const Reviews = () => {
const [reviews, setReviews] = useState();

const {id} = useParams();

useEffect(() => {
  const fetchPosts = async () => {
    try {

      const results = await movieReviews(id);
      setReviews(results);
      
    } catch ({ response }) {
      console.log(response.data.message);
    }
  }
  fetchPosts();
}, [id]);
 
if(reviews) {

  return (
    <ul>
      {reviews.length ? <ReviewsList reviews={reviews}/> : <h3>We don't have any reviews for this movie.</h3>}
    </ul>
  )
}

}

export default Reviews