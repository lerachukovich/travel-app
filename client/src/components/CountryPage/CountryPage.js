import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import MapComponent from "../Map/Map.component";
import useHttp from "../../hooks/http.hook";
import WeatherWidget from "../WetherWidget/WeatherWidget";
import './CountryPage.scss';
import './../ImagesGallery/ImagesGallery';
import ImagesGallery from './../ImagesGallery/ImagesGallery';
import CurrencyWidget from './../CurrencyWidget/CurrencyWidget';
import Spinner from "../Spinner/Spinner";
import Video from "../Video/Video";

import TimeDate from "../TimeDateWidget/TimeDateWidget";



const CountryPage = () => {
    const { id } = useParams();

    const [countryData, setCountryData] = useState({});

    const { loading, request } = useHttp();

    const getCountryData = useCallback(
        async () => {
            try {
                const data = await request('/api/countries/countrylist', 'GET', null);
                const countryInfo = data.filter(countries => countries.country_en === id)[0];
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
            <h1 className='country-page_title'>Hello, you are in {countryData.country_en}, {countryData.capital_en}</h1>
            <p className='country-page_description'>{countryData.description_en}</p>
            <img className='country-img' src={countryData.img_source} alt="country image"/>
            <div className='country-info'>
                <WeatherWidget />
                <TimeDate value={countryData} />
                <CurrencyWidget countryData={countryData}/>
            </div>
            <div>
                <Video value={countryData}/>
                <ImagesGallery countryData={countryData}/>
            </div>
            <MapComponent value={countryData} />

        </div>
    )
};

export default CountryPage;
