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
            <div className="collapse navbar-collapse" id="navbarColor01">
                <div className="navbar-nav mr-auto">
                    <div className="nav-item">
                        <Link className='nav-link' to="/login">
                            Login
                        </Link>
                    </div>
                </div>

            </div>
            <div className="nav-item dropdown">
                <div className="form-group language-switcher">
                    <select onChange={(e)=> setLanguage(e.target.value)} className="form-control" id="exampleSelect1" value={language}>
                        <option value="ru">RU</option>
                        <option value="en">EN</option>
                        <option value="blr">BY</option>
                    </select>
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
