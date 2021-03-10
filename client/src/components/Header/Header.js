/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.scss';
import logo from './../../assets/images/travel.svg';
import {Link} from 'react-router-dom';
import SearchForm from './../SearchForm/SearchForm';

const Header = ({language, setLanguage, searchValue, setSearchValue}) => {
    return (
        <nav className="app-header navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand app-logo" href="#">
                <img src={logo} alt="logo"/>
            </a>

            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                    data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <div className="navbar-nav mr-auto">
                    <div className="nav-item">
                        <Link className='nav-link' to="/login">
                            Login
                        </Link>
                    </div>
                </div>
                <SearchForm
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <div className="nav-item dropdown">
                    <div className="form-group language-switcher">
                        <select onChange={(e) => setLanguage(e.target.value)} className="form-control"
                                id="exampleSelect1" value={language}>
                            <option value="ru">RU</option>
                            <option value="en">EN</option>
                            <option value="blr">BY</option>
                        </select>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
