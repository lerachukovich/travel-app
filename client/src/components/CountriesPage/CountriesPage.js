import React from 'react';
import './CountriesPage.scss';
import CountryCard from './../CountryCard/CountryCard';

const CountriesPage = ({countriesData, loading}) => {

    const countriesList = (
        countriesData.map(item => {
            return <CountryCard key={item._id} {...item}/>
        })
    );

    if (loading) {
        return (
            // TODO insert preloader
            <h1>Loading</h1>
        )
    } else {
        return (
            <div className="countries-page-wrapper">
                {countriesList}
            </div>
        )
    }
}

    export default CountriesPage;
