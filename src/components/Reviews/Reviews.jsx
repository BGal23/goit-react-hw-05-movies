import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllVideos } from '../importApi';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    const movieIdUrl = `/movie/${movieId}/reviews?`;
    getAllVideos(movieIdUrl).then(movieById => {
      setReviewsData(movieById.data.results);
    });
  }, [movieId]);

  const reviewsList = reviewsData.map(text => (
    <li className={css.reviews} key={text.id}>
      <h4>Author: {text.author}</h4>
      <p>{text.content}</p>
    </li>
  ));

  return (
    <ul>
      {reviewsData.length !== 0 ? (
        reviewsList
      ) : (
        <h4>Sorry, We don't have any reviews for this movie</h4>
      )}
    </ul>
  );
};
export default Reviews;
