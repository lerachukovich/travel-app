import React, {useState, useEffect} from 'react';
import './CountriesPage.scss';
import CountryCard from './../CountryCard/CountryCard';

const CountriesPage = () => {

    const [countriesData, setCountriesData] = useState([]);

    const getCountriesData = async () => {
        await fetch('countries.json')
        .then((response) => {
            return response.json();
          })
          .then((data) => {
            setCountriesData(data);
          });
    };

    useEffect(()=> {
        getCountriesData();
    }, []);

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