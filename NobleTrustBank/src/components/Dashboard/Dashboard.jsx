import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logoforbank from "../../assets/logoforbank2.png";
import logoontheheader from "../../assets/logoontheheader.png";
import "./dashboard.css";
// import { Outlet } from "react-router-dom";

const Dashboard = ({ children }) => {
  const handleSidebarToggle = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
  };
  
  return (
    <div className="dashboardContainer">
      <div className="sidebar">
        <div className="top">
          {/* <div className="logoCtn"> */}
            <div className="logo">
             
            </div>
            <i
              className="bx bx-menu"
              id="btn"
              onClick={handleSidebarToggle}
            ></i>
          {/* </div> */}
          {/* <span>
            <i
              className="bx bx-menu"
              id="btn"
              onClick={handleSidebarToggle}
            ></i>
          </span> */}
        </div>

        <ul>
          <li>
            <NavLink to="/dashboard/my-account" className="navlink">
              <i className="bx bx-home"></i>
              <span className="nav-item">Home</span>
            </NavLink>
            <span className="tooltip">Home</span>
          </li>
          <li>
            <NavLink to="/dashboard/transfer" className="navlink">
              <i className="bx bxs-credit-card"></i>
              <span className="nav-item">Send</span>
            </NavLink>
            <span className="tooltip">Send</span>
          </li>
          <li>
            <NavLink to = "/dashboard/history" className="navlink">
              <i className="bx bx-history"></i>
              <span className="nav-item">History</span>
            </NavLink>
            <span className="tooltip">History</span>
          </li>
          <li>
            <NavLink to="/dashboard/settings" className="navlink">
              <i className="bx bx-cog"></i>
              <span className="nav-item">Settings</span>
            </NavLink>
            <span className="tooltip">Settings</span>
          </li>
          <li>
            <NavLink to="/" className="navlink">
              <i className="bx bx-log-out"></i>
              <span className="nav-item">Logout</span>
            </NavLink>
            <span className="tooltip">Logout</span>
          </li>
        </ul>
      </div>

            
     
      <div className="content-view">
        <div className="dashContainer">
          <span>
            <img src={logoontheheader} alt="NobleTrust Bank Logo" />
          </span>
          <div className="notification">
            <Link to="#">
              <i className="bx bx-notification"></i>
              <span class="tooltip">Notification</span>
            </Link>
          </div>
        </div>
        <div><Outlet /></div>
      </div>
    </div>
  );

};

export default Dashboard;



