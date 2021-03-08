import './App.scss';
import React from "react";
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import CountriesPage from './../CountriesPage/CountriesPage';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";


const App = () => {
  return (
    <div className="app-wrapper">
    <Header/>
      <Router>
        <Switch>
            <Redirect from="/" exact to="/countries" />
          <Route path="/countries" component={CountriesPage} />
        </Switch>
      </Router>
    <Footer/>
    </div>
  );
};

export default App;