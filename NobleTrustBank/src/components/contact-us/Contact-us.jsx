import React from 'react';
import style from './contactUs.module.css'; // Importing the CSS module

const ContactUs = () => {
    return (
        <div className={style.contactUs} id="contact us">
            <div className={style.contactUsDetails}>
                <h2>CONTACT US</h2>
                <div>
                    <p>Help Desk</p>
                    <ul>
                        <li>+234-987654321</li>
                        <li><a href="mailto:info@nobletrustbank.com">INFO@NOBLETRUSTBANK.COM</a></li>
                        <li>CHAT WITH US ON WHATSAPP - 0123456789</li>
                    </ul>
                </div>
            </div>
            <div className={style.contactUsImg}>
                <img src="/images/ContactusPic.png" alt="Contact Us" />
            </div>
        </div>
    );
};

export default ContactUs;
