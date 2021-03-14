import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/http.hook";
import WeatherWidget from "../WetherWidget/WeatherWidget";


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
        <div>
            <WeatherWidget />
        </div>
    )
};

export default CountryPage;
