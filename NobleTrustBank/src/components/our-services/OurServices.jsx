import React from 'react';
import style from './ourservices.module.css';

const OurServices = () => {
    return (
        <div className={style.container} id="services">
            <div className={style.headingTextStyle}>
                <h2>Our Services</h2>
            </div>

            <div className={style.cardContainer}>
                <div className={style.card}>
                    <img src="/images/1stpic.png" className={style.cardsImage} alt="Account Management" />
                    <div className={style.cardContent}>
                        <h3>Account Management: Simplify Your Financial Life</h3>
                        <p>
                            Check real-time balances, review transaction history, and effortlessly handle multiple accounts—all in one place. Stay in control and make informed financial decisions with ease.
                        </p>
                    </div>
                </div>

                <div className={style.card}>
                    <img src="/images/2nd pic.png" className={style.cardsImage} alt="Bill Payments" />
                    <div className={style.cardContent}>
                        <h3>Bill Payments: Effortless and Convenient</h3>
                        <p>
                            Pay your utility bills, credit card bills, and more directly from the app with just a few taps. Enjoy the convenience of scheduling one-time or recurring payments, and never worry about missing a due date again.
                        </p>
                    </div>
                </div>

                <div className={style.card}>
                    <img src="/images/3rd pic.png" className={style.cardsImage} alt="Build Savings" />
                    <div className={style.cardContent}>
                        <h3>Build Savings: Achieve Your Financial Goals</h3>
                        <p>
                            Create personalized savings goals and track your progress in real-time while enjoying exclusive cashback offers and discounts on everyday purchases, helping you save more with every transaction.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
