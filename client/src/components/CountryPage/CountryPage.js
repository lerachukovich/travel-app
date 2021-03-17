import React, {useCallback, useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
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

    const {loading, request} = useHttp();

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

    useEffect(() => setSearchVisibility(), [setSearchVisibility]);

    useEffect(() => {
        getCountryData();
    }, []);

    return (
        <div className='country-page_wrapper'>
            {loading && <Spinner/>}
            <Link className="country-page__go-back" to={'/'} title="Go back">Go</Link>
            <h1 className='country-page_title'> {countryData[`country_${language}`]}, {countryData[`capital_${language}`]}</h1>
            <div className="top">
                <div className="description">
                    <p className='description-country'>{countryData[`description_${language}`]}</p>
                    <img className='description-img' src={countryData.img_source} alt="country image"/>
                </div>

                <div className='country-info'>
                    <WeatherWidget language={language} countryData={countryData}/>
                    <TimeDate value={countryData} language={language}/>
                    <CurrencyWidget countryData={countryData} language={language}/>
                </div>
            </div>


            <div className="media">
                <Video value={countryData}/>
            </div>

            <MapComponent value={countryData}/>


            <ImagesGallery countryData={countryData} language={language} setIsScroll={setIsScroll}/>

        </div>
    )
};

export default CountryPage;
