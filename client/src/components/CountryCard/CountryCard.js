import React from 'react';
import { useHistory } from "react-router-dom";
import './CountryCard.scss';


const CountryCard = ({country_en, capital_en, img_source}) => {

    const history = useHistory();
    const redirectToCountryPage = () => {
        history.push( `./countries/${country_en}`);
    };

    return (
        <div onClick={()=>redirectToCountryPage()} className="country-card card text-white bg-primary mb-3">
            <img className="card-img" src={img_source} alt={country_en}/>
            <h3 className="card-header">{country_en}</h3>
            <div className="card-body">
                <h6 className="card-subtitle text-muted">{capital_en}</h6>
            </div>
        </div>
    )
}

export default CountryCard;
