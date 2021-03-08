import React from 'react';
import './Header.scss';
import logo from './../../assets/images/app-logo.png';
import {Link} from 'react-router-dom';

const Header = ({language, setLanguage}) => {
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
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Header;