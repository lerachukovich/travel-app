import React from 'react';
import { useHistory } from "react-router-dom";
import './CountryCard.scss';

const CountryCard = ({country, capital, img_source}) => {
    const history = useHistory();
    const redirectToCountryPage = () => {
        history.push( `./countries/${country}`);
    };
    return (
        <div onClick={()=>redirectToCountryPage()} className="country-card card text-white bg-primary mb-3">
            <img className="card-img" src={img_source} alt={country}/>
            <h3 className="card-header">{country}</h3>
            <div className="card-body">
                {/*<h5 className="card-title">Capital:</h5>*/}
                <h6 className="card-subtitle text-muted">{capital}</h6>
            </div>
        </div>
    )
}

export default CountryCard;
