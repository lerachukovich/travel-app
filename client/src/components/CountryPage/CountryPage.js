import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import MapComponent from "../Map/Map.component";
import useHttp from "../../hooks/http.hook";
import WeatherWidget from "../WetherWidget/WeatherWidget";
import './CountryPage.scss';
import './../ImagesGallery/ImagesGallery';
import ImagesGallery from './../ImagesGallery/ImagesGallery';
import Spinner from "../Spinner/Spinner";


const CountryPage = () => {
    const { id } = useParams();

    const [countryData, setCountryData] = useState({});

    const { loading, request } = useHttp();

    const getCountryData = useCallback(
        async () => {
            try {
                const data = await request('/api/countries/countrylist', 'GET', null);
                const countryInfo = data.filter(countries => countries.country === id)[0];
                setCountryData(countryInfo);
            } catch (e) {
            }
        },
        [request]
    );


    useEffect(() => {
        getCountryData();
    }, []);

    return (
        <div className='country-page_wrapper'>
            {loading && <Spinner />}
            <h1 className='country-page_title'>Hello, you are in {countryData.country}, {countryData.capital}</h1>
            <p className='country-page_description'>{countryData.description}</p>
            <MapComponent value={countryData} />
            <WeatherWidget />
            <ImagesGallery countryData={countryData}/>
        </div>
    )
};

export default CountryPage;
