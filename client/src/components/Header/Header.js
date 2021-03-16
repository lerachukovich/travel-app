import React, {useContext, useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
    CardImg
} from 'reactstrap';
import './Header.scss';
import logo from './../../assets/images/travel.svg';
import SearchForm from './../SearchForm/SearchForm';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Header = ({language, setLanguage, searchValue, setSearchValue}) => {
    const auth = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
            <Navbar className="app-header navbar navbar-expand-lg navbar-dark bg-primary" expand="md">
                <NavbarBrand href="/"> <CardImg className='app-logo' src={logo} alt="logo" /></NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        {auth.isAuthenticated && auth.photo && (
                                <NavItem className='user'>
                                    <NavLink href='/profile'>
                                        <span>Hello, {auth.name}</span>
                                    </NavLink>
                                    <CardImg className='avatar_img' src={auth.photo} alt='avatar' />
                                </NavItem>
                        )}
                        <SearchForm
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                        />
                        <Input type="select" name="select" onChange={(e) => setLanguage(e.target.value)}
                               className="form-control language-switcher"
                               id="exampleSelect1" value={language}>
                            <option value='en'>EN 🇬🇧</option>
                            <option value='ru'>RU 🇷🇺</option>
                            <option value='by'>BY 🇧🇾</option>
                        </Input>
                        {
                            auth.isAuthenticated ?
                            <NavItem>
                                <NavLink className='nav-link logout_btn' onClick={auth.logout}>Logout</NavLink>
                            </NavItem> :
                            <NavItem>
                                <NavLink className='nav-link login_btn' href="/login">Login</NavLink>
                            </NavItem>
                        }

                    </Nav>
                </Collapse>
            </Navbar>
    )
}

export default Header;
