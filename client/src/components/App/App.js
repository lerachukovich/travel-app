import './App.scss';
import React, {useState} from "react";
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import CountriesPage from './../CountriesPage/CountriesPage';
import RegisterForm from './../RegisterForm/RegisterForm';
import LoginForm from './../LoginForm/LoginForm';
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
            <Router>
                <Header 
                    language={language}
                    setLanguage={setLanguage}
                />
                
                    <Switch>
                        <Redirect from="/" exact to="/countries" />
                        <Route path="/countries">
                            <CountriesPage
                                language={language}
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