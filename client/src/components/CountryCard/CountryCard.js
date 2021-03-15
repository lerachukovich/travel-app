import React from 'react';
import { useHistory } from "react-router-dom";
import './CountryCard.scss';


const CountryCard = (props) => {
    const {img_source, country_en} = props;

    const country = props[`country_${props.language}`];
    const capital = props[`capital_${props.language}`];

    const history = useHistory();
    const redirectToCountryPage = () => {
        history.push( `./countries/${country_en}`);
    };

    return (
        <div onClick={()=>redirectToCountryPage()} className="country-card card text-white bg-primary mb-3">
            <img className="card-img" src={img_source} alt={country}/>
            <h3 className="card-header">{country}</h3>
            <div className="card-body">
                <h6 className="card-subtitle text-muted">{capital}</h6>
            </div>
        </div>
    )
}

export default CountryCard;
