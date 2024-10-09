import React from 'react';
import style from './header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={style.headingContainer}>
            <nav className={style.navOne}>
                <div className={style.logo}>
                    <img src="src/assets/logoontheheader.png" width="125px" height="52px" alt="NobleTrust Bank Logo" />
                </div>
                <ul className={style.navOneUl}>
                    <li className={style.navOneLi}><a href="#home">HOME</a></li>
                    <li className={style.navOneLi}><a href="#about us">ABOUT US</a></li>
                    <li className={style.navOneLi}><a href="#services">SERVICES</a></li>
                    <li className={style.navOneLi}><a href="#contact us">CONTACT US</a></li>
                </ul>
                <div className={style.buttonContainer}>
                    <Link to={'/login'}>
                        <button type="button" className={style.btn1}>LOGIN</button>
                    </Link>
                    <Link to={'/sign-up'}>
                        <button type="button" className={style.btn2}>Get Started</button>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
