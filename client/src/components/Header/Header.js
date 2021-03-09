import React from 'react';
import './Header.scss';
import logo from './../../assets/images/app-logo.png';
import {Link} from 'react-router-dom';
import SearchForm from './../SearchForm/SearchForm';

const Header = ({language, setLanguage, searchValue, setSearchValue}) => {
    return (
        <nav class="app-header navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand app-logo" href="#">
                <img src={logo} alt="logo"/>
            </a>
            <div class="collapse navbar-collapse" id="navbarColor01">
                <div class="navbar-nav mr-auto">
                    <div class="nav-item">
                        <Link to="/login">
                            Login
                        </Link>
                    </div>
                    <div class="nav-item dropdown">
                        <div class="form-group">
                            <select onChange={(e)=> setLanguage(e.target.value)} class="form-control" id="exampleSelect1" value={language}>
                                <option value="ru">Русский</option>
                                <option value="en">English</option>
                                <option value="blr">Беларускi</option>
                            </select>
                        </div>
                    </div>
                </div>
                <SearchForm
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />

            </div>
        </nav>
    )
}

export default Header;