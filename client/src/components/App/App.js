import './App.scss';
import React, {useState} from "react";
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import CountriesPage from './../CountriesPage/CountriesPage';
import './../../styles/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";


const App = () => {

    const [language, setLanguage] = useState('ru');

    return (
        <div className="app-wrapper">
        <Header 
            language={language}
            setLanguage={setLanguage}
        />
        <Router>
            <Switch>
                <Redirect from="/" exact to="/countries" />
                <Route path="/countries">
                    <CountriesPage
                        language={language}
                    />
                </Route>
            </Switch>
        </Router>
        <Footer/>
        </div>
    );
};

export default App;