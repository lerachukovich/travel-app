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
import {dictionary} from './../../data/dictionary';



const CountryPage = ({language, setSearchVisibility, setIsScroll}) => {
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

    useEffect(()=> setSearchVisibility(), [setSearchVisibility]);

    useEffect(() => {
        getCountryData();
    }, []);

    return (
        <div className='country-page_wrapper'>
            {loading && <Spinner />}
            <h1 className='country-page_title'>{dictionary[language]['hello-message']} {countryData[`country_${language}`]}, {countryData[`capital_${language}`]}</h1>
            <p className='country-page_description'>{countryData[`description_${language}`]}</p>
            <MapComponent value={countryData} />
            <WeatherWidget language={language} countryData={countryData} />
            <TimeDate value={countryData} language={language} />
            <CurrencyWidget countryData={countryData} language={language}/>
            <Video value={countryData}/>
            <ImagesGallery countryData={countryData} language={language} setIsScroll={setIsScroll}/>
        </div>
    )
};

export default CountryPage;
