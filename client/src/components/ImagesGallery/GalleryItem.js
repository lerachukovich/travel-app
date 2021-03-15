import React from "react";

const GalleryItem = ({sight_name, sight_description, sight_view}) => {

  return (
    <div className="carousel-item-wrapper" >
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
    </div>
  );
};

export default GalleryItem;