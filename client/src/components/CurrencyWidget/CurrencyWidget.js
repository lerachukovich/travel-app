import React, {useEffect, useState} from 'react';
import './CurrencyWidget.scss';
import {dictionary} from '../../data/dictionary';

const currencyCodes = {
    'Spain': 'EUR',
    'Italy': 'EUR',
    'Russia': 'RUB',
    'Belarus': 'BYN',
    'Ukraine': 'UAH',
    'Germany': 'EUR',
    'France': 'EUR',
    'Poland': 'PLN'
};

const CurrencyWidget = ({countryData, language}) => {
    const countryCurrency = currencyCodes[countryData.country_en];

    const [currencyData, setCurrencyData] = useState([]);

    const getCurrencyData = async () => {
        if (countryCurrency) {
            await fetch(`https://apilayer.net/api/live?access_key=0b90a429006e62812eaf47ae10e065d4&currencies=EUR,USD,RUB&source=${countryCurrency}`)
                .then(response => response.json())
                .then(data => setCurrencyData(data.quotes))
                .catch(error => console.log(error));
        }
    };

    useEffect(() => {
        getCurrencyData();
    }, [countryData]);

    return (
        <div className="card text-white bg-primary mb-3 currency-widget">
            <div className="card-body">
                <h4 className="card-title">{dictionary[language]['currency-info']}</h4>
                <p className='card-title local-currency'>{dictionary[language]['local-currency']}: {countryCurrency}</p>
                <p>EUR: {currencyData[`${countryCurrency}EUR`]}</p>
                <p>USD: {currencyData[`${countryCurrency}USD`]}</p>
                <p>RUB: {currencyData[`${countryCurrency}RUB`]}</p>
            </div>
        </div>
    )
}

export default CurrencyWidget;
