import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
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
                console.log(countryInfo);
                // eslint-disable-next-line no-empty
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
            Hello!
        </div>
    )
};

export default CountryPage;