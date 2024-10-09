import React from 'react';
import Dashboard from '../Dashboard/Dashboard'; // Import the parent Dashboard component
import styles from './MyAccount.module.css'; // Adjusted the import to reference the correct path
import { Link, NavLink } from "react-router-dom"; // For navigation

const MyAccount = () => {
    const handleSidebarToggle = () => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("active");
      };
    
  return (

    <>
  <div className={styles.userInfo}>
    <p>Good Day, User</p>
    <i className={styles.userIcon + ' ri-hand-heart-fill'}></i>
  </div>

  <div className={styles.accountContent}>
    <div className={styles.accountCardContent}>
      <h2 className={styles.cardTitle}>MY ACCOUNT</h2>
      <div className={styles.accountBalance}>
        <div className={styles.details}>
          <div>
            <p>Account Number</p>
            <h4>3166924052</h4>
          </div>

          <div className={styles.activeCard}>
            <p>Status</p>
            <h5>Active</h5>
          </div>
        </div>

        <div className={styles.balance}>
          <div className={styles.total}>
            <p>Total Balance</p>
            <h4>₦35,000,000</h4>
          </div>

          <div className={styles.savings}>
            <p>Account type</p>
            <h5>Savings Account</h5>
          </div>
        </div>
      </div>
    </div>

    <div className={`${styles.accountCard} ${styles.accountCardHover}`}>
      <h2 className={styles.cardTitle}>SERVICES</h2>
      <ul className={styles.iconList}>
        <li className={styles.iconListItem}>
          <a className={styles.iconContainer} href="#">
            <i className={styles.cardIcon + ' ri-bill-line'}></i>
            <span className={styles.iconText}>Pay Bills</span>
          </a>
        </li>

        <li className={styles.cardListItem}>
          <Link className={styles.iconContainer} to="/dashboard/save">
            <i className={`${styles.cardIcon} ri-bank-line`}></i>
            <span className={styles.iconText}>Save</span>
          </Link>
        </li>

        <li className={styles.cardListItem}>
          <a className={styles.iconContainer} href="#">
            <i className={styles.cardIcon + ' bx bx-credit-card-front'}></i>
            <span className={styles.iconText}>Send</span>
          </a>
        </li>
      </ul>
    </div>

    <div className={`${styles.accountCard} ${styles.accountCardHover}`}>
      <h2 className={styles.cardTitle}>ACCOUNT SETUP</h2>
      <ul className={styles.setupContent}>
        <li className={styles.cardListItem}>
          <a className={styles.iconContainer} href="#">
            <i className={styles.cardIcon + ' bx bx-check-circle'}></i>
            <span className={styles.iconText}>Link NIN</span>
          </a>
        </li>

        <li className={styles.cardListItem}>
          <a className={styles.iconContainer} href="#">
            <i className={styles.cardIcon + ' bx bx-check-circle'}></i>
            <span className={styles.iconText}>Link BVN</span>
          </a>
        </li>

        <li className={styles.cardListItem}>
          <a className={styles.iconContainer} href="#">
            <i className={styles.cardIcon + ' bx bx-check-circle'}></i>
            <span className={styles.iconText}>Personal Information</span>
          </a>
        </li>

        <li className={styles.cardListItem}>
          <a className={styles.iconContainer} href="#">
            <i className={styles.cardIcon + ' bx bx-check-circle'}></i>
            <span className={styles.iconText}>Contact Details</span>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div className={styles.transferContainer}>
    <h2 className={styles.transferTitle}>RECENT TRANSFERS</h2>
    <div className={styles.transferSubContainer}>
      <div>
        <i className={styles.transferIcon + ' ri-user-shared-2-fill'}></i>
        <p>Tosin Tosin</p>
      </div>

      <div>
        <i className={styles.transferIcon + ' ri-user-shared-2-fill'}></i>
        <p>Fejiro Joan</p>
      </div>

      <div>
        <i className={styles.transferIcon + ' ri-user-shared-2-fill'}></i>
        <p>Temi Grace</p>
      </div>
    </div>
  </div>
</>

  );
};

export default MyAccount;
