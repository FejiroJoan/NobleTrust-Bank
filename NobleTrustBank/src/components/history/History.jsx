// import React, { useState } from 'react';
// import Dashboard from '../Dashboard/Dashboard';
// import styles from './history.module.css';
// import { Link, NavLink } from "react-router-dom"; // For navigation

// const History1 = () =>{
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [noRecentHistoryVisible, setNoRecentHistoryVisible] = useState(false);

//   const handleDropdownClick = () => {
//     setDropdownVisible(!dropdownVisible);
//     setNoRecentHistoryVisible(!noRecentHistoryVisible);
//   };

//   const handleOptionClick = () => {
//     setNoRecentHistoryVisible(true);
//   };

//   return (


//     <>
    
//     <div style={styles.mainContent}>
//       <div style={styles.container}>
//         <img src="/image/bankapplogo2.png" width="90px" height="40px" alt="NobleTrust Bank Logo" />
//       </div>
//       <div style={styles.historyContent}>
//         <h2>History</h2>
//         <div style={styles.box1}>
//           <div style={styles.box2}>
//             <span>Source Account</span>
//             <button style={styles.dropdownBtn} onClick={handleDropdownClick}>
//               <i className="bx bx-chevron-down"></i>
//             </button>
//             <ul style={{ ...styles.dropdownList, display: dropdownVisible ? 'block' : 'none' }}>
//               <li><a href="#" onClick={handleOptionClick}>Option 1</a></li>
//               {/* Add more dropdown list items here */}
//             </ul>
//             <div style={{ ...styles.noRecentHistory, display: noRecentHistoryVisible ? 'block' : 'none' }}>
//               No recent history
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
    
//     </>
   
//   );
// };

// export default History1;


import React, { useState } from 'react';
// import Dashboard from '../Dashboard/Dashboard';
import styles from './history.module.css';
import { Link, NavLink } from "react-router-dom"; // For navigation

const History1 = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [noRecentHistoryVisible, setNoRecentHistoryVisible] = useState(false);

  const handleDropdownClick = () => {
    setDropdownVisible(!dropdownVisible);
    setNoRecentHistoryVisible(!noRecentHistoryVisible);
  };

  const handleOptionClick = () => {
    setNoRecentHistoryVisible(true);
  };

  return (
    <>
      <div className={styles.mainContent}>
        {/* <div className={styles.container}>
          <img src="/image/bankapplogo2.png" width="90px" height="40px" alt="NobleTrust Bank Logo" />
        </div> */}
        <div className={styles.historyContent}>
          <h2>History</h2>
          <div className={styles.box1}>
            <div className={styles.box2}>
              <span>Source Account</span>
              <button className={styles.dropdownBtn} onClick={handleDropdownClick}>
                <i className="bx bx-chevron-down"></i>
              </button>
              <ul className={styles.dropdownList} style={{ display: dropdownVisible ? 'block' : 'none' }}>
                <li><Link to="#" onClick={handleOptionClick}>Option 1</Link></li>
                {/* Add more dropdown list items here */}
              </ul>
              <div className={styles.noRecentHistory} style={{ display: noRecentHistoryVisible ? 'block' : 'none' }}>
                No recent history
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History1;
