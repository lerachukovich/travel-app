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
            await fetch(`http://apilayer.net/api/live?access_key=43121c3cd93b00e5266cd30715305307&currencies=USD,RUB,EUR&source=USD&format=1`)
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
                {/*<p className='card-title local-currency'>{dictionary[language]['local-currency']}: USD</p>*/}
                <p>EUR: {currencyData[`USDEUR`]}</p>
                <p>USD: {currencyData[`USDUSD`]}</p>
                <p>RUB: {currencyData[`USDRUB`]}</p>
            </div>
        </div>
    )
}

export default CurrencyWidget;
