import React from 'react';
import './Footer.scss';


const Footer = () => {
    return (
    <div className="app-footer">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="footer-logo" href="https://rs.school/js/"></a>

            <ul class="navbar-nav footer-links">
                <li class="nav-item">
                    <a class="nav-link" href="https://github.com/Alexus-bat">Alex</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://github.com/lerachukovich">Lera</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://github.com/OlegMikhailov23">Oleg</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://github.com/OlgaFedorovich">Olga</a>
                </li>
            </ul>
            
        </nav>            
    </div>



    )
}

export default Footer;