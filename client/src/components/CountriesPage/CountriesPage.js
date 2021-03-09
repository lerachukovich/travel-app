import React, {useState, useEffect} from 'react';
import './CountriesPage.scss';
import CountryCard from './../CountryCard/CountryCard';

const CountriesPage = ({countriesData}) => {

    const countriesList = (
        countriesData.map(item => {
            return <CountryCard key={item._id} {...item}/>
        })
    );

    return (
        <div className="countries-page-wrapper">
            {countriesList}
        </div>
    )
}

export default CountriesPage;