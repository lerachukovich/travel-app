import React from 'react';
import './CountryCard.scss';

const CountryCard = ({country, capital, img_source}) => {
    return (
        <div class="country-card card text-white bg-primary mb-3">
            <h3 class="card-header">{country}</h3>
            <div class="card-body">
                <h5 class="card-title">Capital:</h5>
                <h6 class="card-subtitle text-muted">{capital}</h6>
            </div>
            <img className="card-img" src={img_source} alt={country}/>
        </div>
    )
}

export default CountryCard;