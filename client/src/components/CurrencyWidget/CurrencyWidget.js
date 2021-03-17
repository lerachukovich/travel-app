import React, {useEffect, useState} from 'react';
import './CurrencyWidget.scss';
import { dictionary } from '../../data/dictionary';

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
        if(countryCurrency) {
            await fetch(`https://apilayer.net/api/live?access_key=0b90a429006e62812eaf47ae10e065d4&currencies=EUR,USD,RUB&source=${countryCurrency}`)
            .then(response => response.json())
            .then(data => setCurrencyData(data.quotes))
            .catch(error=> console.log(error));
        }
    };

    useEffect(()=> {
        getCurrencyData();
    }, [countryData]);

    return (
        <div className="table_wrapper">
            <table className="table table-hover">
            <thead>

                <tr className="table-primary">
                    <th scope="col" colSpan="3">{dictionary[language]['currency-info']}</th>
                </tr>
                <tr className="table-active">
                    <th scope="col" colSpan="3">{dictionary[language]['local-currency']}: {countryCurrency}</th>

                </tr>
            </thead>
            <tbody>
                <tr className="currencies" >
                    <th scope="row">EUR</th>
                    <th scope="row">USD</th>
                    <th scope="row">RUB</th>
                </tr>
                <tr>
                    <th>{currencyData[`${countryCurrency}EUR`]}</th>
                    <td>{currencyData[`${countryCurrency}USD`]}</td>
                    <td>{currencyData[`${countryCurrency}RUB`]}</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default CurrencyWidget;
