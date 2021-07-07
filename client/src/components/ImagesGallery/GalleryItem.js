import React, { useState, useContext, useEffect } from "react";
import Rating from '@material-ui/lab/Rating';
import { AuthContext } from "../../context/AuthContext";
import {useHistory} from 'react-router-dom';
import useHttp from '../../hooks/http.hook';
import {Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core';

const GalleryItem = ({
  sight_name, 
  sight_description, 
  sight_view, 
  votes: votesInput,
  countryName}) => {

  const {request} = useHttp();
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [rating, setRating] = useState(0);
  const [votes, setVotes] = useState(votesInput || []);
  const [voteData, setVoteData] = useState({
    userId: auth.userId,
    userName: auth.name,
    vote: null,
    sight_name,
    country: countryName
  })
  const [readOnly, setReadOnly] = useState(false);

  useEffect(() => {
    setRating(averageRating);
    if (votes.some(vote => vote.userId === auth.userId)) {
      setReadOnly(true)
    }
  }, [votes])

  const averageRating = () => {
    return votes.reduce((acc, vote) => acc + vote.vote, 0) / votes.length;
  }

  const postVote = async () => {
    try {
      const data = await request('/api/votes/rating', 'POST', {...voteData});
      setVotes(data.votes);
      console.log(data.votes);
    } catch (e) {
      console.log(e);
    }
  }

  const voteHandler = (vote) => {
    if (!auth.isAuthenticated) {
      return history.push('/login')
    }
    voteData.vote = vote;
    setVoteData(voteData);
    postVote();
  }

  const ratingList = (
    votes.map((vote, idx) => {
      return (
        <AccordionDetails>        
          <Rating value={vote.vote} size='small' readOnly/>
          <span>{vote.userName}</span>
        </AccordionDetails>
    )})
  )

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
      <Accordion>
        <AccordionSummary>
          <Rating name={sight_name} value={rating} onChange={(e, vote) => voteHandler(vote)} size='large' readOnly={readOnly} />
        </AccordionSummary>
        {ratingList}
      </Accordion>    
    </div>
  );
};

export default GalleryItem;
