import React from 'react';
import './Footer.scss';


const Footer = () => {
    return (
    <div className="app-footer">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="footer-logo" href="https://rs.school/js/"> </a>

            <ul className="navbar-nav footer-links">
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/Alexus-bat">Alex</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/lerachukovich">Lera</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/OlegMikhailov23">Oleg</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/OlgaFedorovich">Olga</a>
                </li>
            </ul>

        </nav>
    </div>



    )
}

export default Footer;
