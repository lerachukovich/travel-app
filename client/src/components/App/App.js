import './App.scss';
import React, {useState, useEffect, useCallback} from "react";
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import CountriesPage from './../CountriesPage/CountriesPage';
import RegisterForm from './../RegisterForm/RegisterForm';
import LoginForm from './../LoginForm/LoginForm';
import useHttp from "../../hooks/http.hook";
import CountryPage from './../../components/CountryPage/CountryPage';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { useAuth } from '../../hooks/auth.hook';
import { AuthContext } from '../../context/AuthContext';
import Profile from '../Profile/Profile';

const App = () => {
    const {login, logout, token, userId, name, photo} = useAuth();
    const isAuthenticated = !!token;

    const [countriesData, setCountriesData] = useState([]);

    const [language, setLanguage] = useState(JSON.parse(localStorage.getItem('current-lang')) || 'ru');

    const [searchValue, setSearchValue] = useState('');

    const { loading, request } = useHttp();

    const [searchVisibility, setSearchVisibility] = useState(true);

    const [isScroll, setIsScroll] = useState(true);
    
    const getCountriesData = useCallback(
        async () => {
            try {
                // eslint-disable-next-line no-shadow
                const data = await request('/api/countries/countrylist', 'GET', null);
                console.log('countries', data);
                setCountriesData(data);
                // eslint-disable-next-line no-empty
            } catch (e) {
            }
        },
        [request]
    );

    useEffect(() => {
        getCountriesData();
    }, []);

    const searchItem = (items, value) => {
        if(value.length === 0) {
            return items;
        }
        const foundCountries = items.filter(item => {
            const foundCountries = item[`country_${language}`].toLowerCase().indexOf(value.toLowerCase()) > -1;
            const foundCapitals = item[`capital_${language}`].toLowerCase().indexOf(value.toLowerCase()) > -1;
            return foundCountries || foundCapitals;
        });
        return foundCountries;
    };

    const visibleCountries = searchItem(countriesData, searchValue);

    return (
        <AuthContext.Provider value={{
            login, logout, token, userId, name, photo, isAuthenticated
        }}>
            <div className={`app-wrapper ${isScroll ? '' : 'app-content-hidden'}`}>
                <Router>
                    <Header
                        language={language}
                        setLanguage={setLanguage}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        searchVisibility={searchVisibility}
                    />

                    <Switch>
                        <Redirect from="/" exact to="/countries" />
                        <Route exact path="/countries">
                            <CountriesPage
                                language={language}
                                countriesData = {visibleCountries}
                                loading = {loading}
                                setSearchVisibility={()=> setSearchVisibility(true)}
                            />
                        </Route>
                        <Route path="/countries/:id">
                            <CountryPage
                                language={language}
                                setSearchVisibility={()=> setSearchVisibility(false)}
                                setIsScroll={()=> setIsScroll(!isScroll)}
                            />
                        </Route>
                        <Route path="/register">
                            <RegisterForm setSearchVisibility={()=> setSearchVisibility(false)}/>
                        </Route>
                        <Route path="/login">
                            <LoginForm setSearchVisibility={()=> setSearchVisibility(false)}/>
                        </Route>
                        {isAuthenticated && (
                            <Route path="/profile">
                                <Profile language={language}
                                setSearchVisibility={()=> setSearchVisibility(false)} />
                            </Route>
                        )}
                    </Switch>

                    <Footer/>
                </Router>
            </div>
        </AuthContext.Provider>
    );
};

export default App;
