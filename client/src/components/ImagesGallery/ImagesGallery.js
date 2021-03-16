import React from 'react';
import './ImagesGallery.sass';
import Slider from "react-slick";
import GalleryItem from './GalleryItem';

export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  className: 'carousel-slider',
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};

const ImagesGallery = ({countryData}) => {
    // console.log(countryData)
    const {sights, country_en} = countryData;
    // console.log(country_en);

    if(sights) {
        return (
            <div className="carousel-slider-wrapper">
                <h2 className="carousel-slider-title">Country Sights</h2>
                <Slider {...settings}>
                    
                {sights.map((sight) => {
                    return (
                    <GalleryItem key={sight.sight_name} {...sight} countryName={country_en} />
                    ) 
                })}

                </Slider>              
            </div>
        )        
    } else return null;

}

export default ImagesGallery;
