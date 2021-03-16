import React, { useState, useContext, useCallback } from "react";
import Rating from '@material-ui/lab/Rating';
import { AuthContext } from "../../context/AuthContext";
import {useHistory} from 'react-router-dom';
import useHttp from '../../hooks/http.hook';

const GalleryItem = ({
  sight_name, 
  sight_description, 
  sight_view, 
  averageRating, 
  ratedBy, 
  countryName}) => {

  const {loading, request, error, clearError} = useHttp();
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [rating, setRating] = useState({
    userId: auth.userId,
    votes: null,
    sight_name,
    country: countryName
  })

  // const [rating, setRating] = useState(...averageRating || 2);

  const postRating = async () => {
    try {
      const data = await request('/api/votes/rating', 'POST', {...rating});
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  const voteHandler = (votes) => {
    if (!auth.isAuthenticated) {
      history.push('/login')
    }
    rating.votes = votes;
    setRating(rating);
    
    postRating();
  }

  return (
    <div className="carousel-item-wrapper">
      <img
        className="carousel-item-image"
        src={sight_view} 
        alt={sight_name}
      />
      <div className="carousel-item-info-wrapper">
        <div className="carousel-item-info">
          <div className="carousel-item-data">{sight_description}</div>          
        </div>
      </div>
      <span className="carousel-item-title">{sight_name}</span>
      <Rating name={sight_name} value={rating} onChange={(e, votes) => voteHandler(votes)} />
    </div>
  );
};

export default GalleryItem;
