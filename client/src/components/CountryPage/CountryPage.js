import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import MapComponent from "../Map/Map.component";
import useHttp from "../../hooks/http.hook";

const CountryPage = () => {
    const { id } = useParams();

    const [countryData, setCountryData] = useState({});

    const { loading, request } = useHttp();

    const getCountryData = useCallback(
        async () => {
            try {
                // eslint-disable-next-line no-shadow
                const data = await request('/api/countries/countrylist', 'GET', null);
                console.log(data);
                const countryInfo = data.filter(countries => countries.country === id)[0];
                setCountryData(countryInfo);
                console.log("Привет",countryInfo);
                // eslint-disable-next-line no-empty
            } catch (e) {
            }
        },
        [request]
    );

    const getWeatherData = useCallback(
        async () => {
            try {
                const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${countryData.country}&APPID=03c58e90c746d993b00ae6c40ccb8326`;
                fetch(weatherURL)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.name)
                    })
            } catch (e) {
            }
        },
        [request]
    )



    useEffect(() => {
        getCountryData();
        getWeatherData();
    }, []);

    return (
        <div>
            <h1>{countryData.country}</h1>
            <MapComponent value={countryData} />
        </div>
    )
};

export default CountryPage;
