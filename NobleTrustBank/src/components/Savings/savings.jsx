import React, { useState } from 'react';
import styles from './savings.module.css'; // Import your CSS module
import Dashboard from '../Dashboard/Dashboard';
// import { Link, NavLink } from "react-router-dom"; // For navigation
import { Link } from 'react-router-dom';


const GoalSpree = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarActive(!isSidebarActive);
  };

 
//   const navigate = useNavigate();

//   const redirectToPage = () => {
//     navigate("/save"); // Update with the correct route if needed
//   };

  return (
    // <Dashboard > 
        
        
        <div className={styles.mainContent}>
    {/* <div className={styles.savingsContainer}>
      <img src="/pictures/Group 239.png" width="90px" height="40px" alt="NobleTrust Bank Logo" />
      <div>
        <a href="#"><i className='bx bx-notification'></i></a>
        <span className={styles.tooltip}>Notification</span>
      </div>
    </div> */}

    <div className={styles.backButton}>
      <a className={styles.backContainer} href="dashboard.html">
        <i className='bx bx-arrow-back'></i>
        <span className={styles.iconArrow}>Back</span>
      </a>
    </div>

    <div className={styles.cardContent}>
      <div className={styles.cardSubcontent}>
        <h4>Create A GoalSpree</h4>
      </div>

      <div className={styles.cardTextContent}>
        <p>
          Save daily, weekly, or monthly, earn higher interest when you save more.
          You can withdraw up to 50% of your savings once every 30 days but you
          will lose your interest if you don't meet your target.
        </p>
      </div>

      <div className={styles.cardInput}>
        <label htmlFor="goalInput">Give your goal a name</label><br />
        <input type="text" id="goalName" name="goalInput" placeholder="e.g Last Card Emergency" required />
      </div>

      <form>
        <div className={styles.inputContainer}>
          <div className={styles.inputTextContainer}>
            <label htmlFor="goalInput">How much would you like to save?</label><br />
            <span className={styles.icon}><i className='bx bx-wallet'></i></span>
            <input type="text" placeholder="Enter a valid number" required />
          </div>

          <div className={styles.selectContainer}>
            <label htmlFor="goalInput">Saving Cycle</label><br />
            <select id="goals" name="goals">
              <option value="">Please Select an option</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputDateContainer}>
            <label htmlFor="goalInput">When would you like to start?</label><br />
            <input type="date" required />
          </div>

          <div className={styles.inputDateContainer}>
            <label htmlFor="goalInput">When would you like to end?</label><br />
            <input type="date" required />
          </div>
        </div>
      </form>

      <div className={styles.goalsButton}>
        <button type="button" className={styles.goalsButtonButton}>Create A Goal</button>
      </div>


    </div>
  </div>
// </Dashboard>
); 
    
};

export default GoalSpree;
