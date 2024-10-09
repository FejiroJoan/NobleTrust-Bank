import React from 'react';
import style from './aboutus.module.css'; // Import the CSS module

const AboutUs = () => {
  return (
    <div className={style.aboutUsContainer} id="about us">
      <div className={style.aboutUsImage}>
        <img src="/images/Aboutus.png" alt="About us" />
      </div>
      <div className={style.textForAboutUs}>
        <h3>ABOUT NOBLETRUST BANK</h3>
        <p className={style.textAroundImage}>
          At NobleTrust Bank, we are dedicated to making banking simpler, 
          smarter, and more convenient for our customers. Our banking app 
          is designed to provide you with everything you need to manage your
          finances on the go. With secure, 24/7 account access, you can check 
          your balance, transfer money, pay bills, and much more, all from your
          phone or tablet. With NobleTrust Bank, you'll have the power of banking 
          at your fingertips.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
