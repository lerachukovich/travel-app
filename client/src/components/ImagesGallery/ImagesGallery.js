import React, {useState} from 'react';
import './ImagesGallery.sass';
import Slider from "react-slick";
import GalleryItem from './GalleryItem';
import { dictionary } from '../../data/dictionary';

export const settings = {
  dots: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  className: 'carousel-slider',
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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


const ImagesGallery = ({countryData, language, setIsScroll}) => {
  const [isGalleryOpened, setIsGalleryOpened] = useState(false);

    const {sights, country_en} = countryData;

    const changeGallerySize = () => {
      setIsScroll();
      setIsGalleryOpened(!isGalleryOpened);
    };


    if(sights) {
        return (
          <div className={`carousel-slider-layout ${isGalleryOpened ? 'layout-show' : ''}`}>
            <div className={`carousel-slider-wrapper ${isGalleryOpened ? 'gallery-full-screen' : ''}`}>
                <h2 className="carousel-slider-title">{dictionary[language]['country-sights']}</h2>
                <Slider {...settings}>

                  {sights.map((sight) => {
                      return (
                      <GalleryItem key={sight.sight_name} {...sight} countryName={country_en} />
                      )
                  })}

                </Slider>
                <button className="full-screen-btn" onClick={()=>changeGallerySize()}><i className={`fas ${isGalleryOpened ? 'fa-compress-arrows-alt' :'fa-expand-arrows-alt'}`}></i></button>
            </div>
          </div>
        )

    } else return null;

}

export default ImagesGallery;
