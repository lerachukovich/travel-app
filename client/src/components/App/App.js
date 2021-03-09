import './App.scss';
import React, {useState, useEffect} from "react";
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import CountriesPage from './../CountriesPage/CountriesPage';
import RegisterForm from './../RegisterForm/RegisterForm';
import LoginForm from './../LoginForm/LoginForm';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";


const App = () => {

    const [countriesData, setCountriesData] = useState([]);

    const [language, setLanguage] = useState('ru');

    const [searchValue, setSearchValue] = useState('');

    const getCountriesData = async () => {
        await fetch('countries.json')
        .then((response) => {
            return response.json();
          })
          .then((data) => {
            setCountriesData(data);
          });
    };

    useEffect(() => {
        getCountriesData();
    }, []);

    const searchItem = (items, value) => {
        if(value.length === 0) {
            return items;
        }
        const foundCountries = items.filter(item => {
            const foundCountries = item.country.toLowerCase().indexOf(value.toLowerCase()) > -1;
            const foundCapitals = item.capital.toLowerCase().indexOf(value.toLowerCase()) > -1;
            return foundCountries || foundCapitals;
        });
        return foundCountries;
    };

    const visibleCountries = searchItem(countriesData, searchValue);

    return (
        <div className="app-wrapper">
            <Router>
                <Header
                    language={language}
                    setLanguage={setLanguage}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />

                <Switch>
                    <Redirect from="/" exact to="/countries" />
                    <Route path="/countries">
                        <CountriesPage
                            language={language}
                            countriesData = {visibleCountries}

                        />
                    </Route>
                    <Route path="/register">
                        <RegisterForm/>
                    </Route>
                    <Route path="/login">
                        <LoginForm/>
                    </Route>
                </Switch>


                <Footer/>
            </Router>
        </div>
    );
};

export default App;
