import React from 'react';
import style from './footer.module.css'; // Importing the CSS module

const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <div className={style.box1}>
                <div className={style.logo}>
                    <img src="src/assets/logoforbank2.png" alt="Bank App Logo" />
                </div>
                <div className={style.group1}>
                    <a href="https://www.facebook.com/yourprofile"><img src="/images/facebook.png"  alt="facebook" /></a>
                    <a href="https://www.instagram.com/yourprofile"><img src="images/instagram.png" alt="instagram" /></a>
                    <a href="https://www.linkedin.com/in/yourprofile"><img src="images/linkedin.png" alt="linkedin" /></a>
                    <a href="https://twitter.com/yourprofile"><img src="images/x.png" alt="twitter" /></a>
                </div>
            </div>
            <div className={style.contactFooter}>
                <p><b>CONTACT US</b></p>
                <p>500 Terry Francine St, San Francisco</p>
                <p>+2347045274519</p>
                <p><a href="mailto:info@nobletrustbank.com">INFO@NOBLETRUSTBANK.COM</a></p>
            </div>
            <div className={style.linkFooter}>
                <p><b>HELPFUL LINKS</b></p>
                <p><a className={style.dropdownItem} href="#home">Home</a></p>
                <p><a className={style.dropdownItem} href="#about">About Us</a></p>
                <p><a className={style.dropdownItem} href="#services">Services</a></p>
                <p><a className={style.dropdownItem} href="#Contact">Contact Us</a></p>
            </div>
            <div className={style.downloadFooter}>
                <p><b>DOWNLOAD APP ON</b></p>
                <a href="https://apps.apple.com/us/app/your-app-name/id1234567890" target="_blank" rel="noopener noreferrer"><img src="images/appstore.png" alt="App Store" /></a>
                <a href="https://play.google.com/store/apps/details?id=com.example.yourApp" target="_blank" rel="noopener noreferrer"><img src="images/googlestore.png" alt="Google Play" /></a>
            </div>
        </div>
    );
};

export default Footer;
