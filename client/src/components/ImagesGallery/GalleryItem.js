import React, { useState, useContext } from "react";
import Rating from '@material-ui/lab/Rating';
import { AuthContext } from "../../context/AuthContext";
import {useHistory} from 'react-router-dom';

const GalleryItem = ({sight_name, sight_description, sight_view, averageRating, ratedBy}) => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const [rating, setRating] = useState(...averageRating || 2);

  // console.log(sight_name, sight_description, sight_view, averageRating, ratedBy)

  const postRating = (vote) => {
    if (!auth.isAuthenticated) {
      history.push('/login')
    }
    console.log(vote, sight_name, auth.userId)
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
      <Rating name={sight_name} value={rating} onChange={(e, vote) => postRating(vote)} />
    </div>
  );
};

export default GalleryItem;
