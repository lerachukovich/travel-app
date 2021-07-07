import React, { useEffect }from 'react';
import './CountriesPage.scss';
import CountryCard from './../CountryCard/CountryCard';
import Spinner from '../Spinner/Spinner';

const CountriesPage = ({countriesData, loading, language, setSearchVisibility}) => {
    useEffect(()=> setSearchVisibility(), [setSearchVisibility]);

    const countriesList = (
        countriesData.map(item => {
            return <CountryCard key={item._id} {...item} language={language}/>
        })
    );

    if (loading) {
        return (
            <Spinner/>
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
