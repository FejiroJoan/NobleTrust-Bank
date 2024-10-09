import React, { useState } from 'react';
import styles from './settings.module.css'; // Importing CSS Modules
import { Link, NavLink } from "react-router-dom"; // For navigation

const Settings1 = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showSecurityQuestion, setShowSecurityQuestion] = useState(false);
    const [showSecurityAnswer, setShowSecurityAnswer] = useState(false);
    const [showVerifyPin, setShowVerifyPin] = useState(false);

    // Tab switching logic
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    // Password validation logic
    const handlePasswordSubmit = (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            alert('New password and confirm password do not match');
            return;
        }

        if (newPassword.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }

        const hasLowercase = /[a-z]/.test(newPassword);
        const hasUppercase = /[A-Z]/.test(newPassword);
        const hasDigit = /\d/.test(newPassword);
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(newPassword);

        if (!(hasLowercase && hasUppercase && hasDigit && hasSpecialChar)) {
            alert('Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character');
            return;
        }

        alert('Password is valid!');
    };

    // Security Questions submit handler
    const handleSecurityQuestionsSubmit = (e) => {
        e.preventDefault();
        // Add validation for security questions if needed
        alert('Security question form submitted!');
    };

    return (
        <div className={styles.mainContent}>
            <div className={styles.container}>
                <img src="/image/bankapplogo2.png" width="90px" height="40px" alt="NobleTrust Bank Logo" />
                <div>
                    <a href="#"><i className='bx bx-notification'></i></a>
                    <span className={styles.tooltip}>Notification</span>
                </div>
            </div>

            <div className={styles.profileHeader}>
                <NavLink to =  "/dashboard/my-account"
                 className={styles.backButton}>
                    <i className='bx bx-arrow-back'></i>
                    Back
             

                </NavLink>
                
                <h2>Profile Settings</h2>

                <div className={styles.profileSettingsContainer}>
                    <ul className={styles.settingsTabs}>
                        <li
                            className={`${styles.tab} ${activeTab === 0 ? styles.active : ''}`}
                            onClick={() => handleTabClick(0)}
                        >
                            Personal Data
                        </li>
                        <li
                            className={`${styles.tab} ${activeTab === 1 ? styles.active : ''}`}
                            onClick={() => handleTabClick(1)}
                        >
                            Change Password
                        </li>
                        <li
                            className={`${styles.tab} ${activeTab === 2 ? styles.active : ''}`}
                            onClick={() => handleTabClick(2)}
                        >
                            Security Questions
                        </li>
                    </ul>

                    <div className={styles.tabContent}>
                        {activeTab === 0 && (
                            <div className={styles.profileInfoContent}>
                                <div className={styles.profileInfo}>
                                    <img src="image/settingsimg.png" alt="Profile Image" />
                                    <label htmlFor="name">Temiloluwa <span className={styles.username}>Temiloluwa@gmail.com</span></label>
                                    <label htmlFor="username">Username: <span className={styles.username}>Adeleke Grace</span></label>
                                    <label htmlFor="phone-number">Phone Number: <span className={styles.username}>08147182816</span></label>
                                </div>
                            </div>
                        )}

                        {activeTab === 1 && (
                            <div className={styles.changePasswordContent}>
                                <div className={styles.changePasswordContainer}>
                                    <h3>Make sure you use 8 characters, <span>1 Lower case, 1 Upper Case, 1 digit, 1 Special Character</span></h3>
                                    <form id="change-password-form" onSubmit={handlePasswordSubmit}>
                                        <label htmlFor="current-password">Enter Current Password:</label>
                                        <div className={styles.passwordInput}>
                                            <input
                                                type={showCurrentPassword ? "text" : "password"}
                                                id="current-password"
                                                value={currentPassword}
                                                onChange={(e) => setCurrentPassword(e.target.value)}
                                                required
                                            />
                                            <span className={styles.togglePassword} onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
                                                <i className={showCurrentPassword ? "fa fa-eye-slash" : "fa fa-eye"}></i>
                                            </span>
                                        </div>

                                        <label htmlFor="new-password">Enter New Password:</label>
                                        <div className={styles.passwordInput}>
                                            <input
                                                type={showNewPassword ? "text" : "password"}
                                                id="new-password"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                required
                                            />
                                            <span className={styles.togglePassword} onClick={() => setShowNewPassword(!showNewPassword)}>
                                                <i className={showNewPassword ? "fa fa-eye-slash" : "fa fa-eye"}></i>
                                            </span>
                                        </div>

                                        <label htmlFor="confirm-password">Verify New Password:</label>
                                        <div className={styles.passwordInput}>
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                id="confirm-password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                required
                                            />
                                            <span className={styles.togglePassword} onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                                <i className={showConfirmPassword ? "fa fa-eye-slash" : "fa fa-eye"}></i>
                                            </span>
                                        </div>

                                        <button type="submit">Save</button>
                                    </form>
                                </div>
                            </div>
                        )}

                        {activeTab === 2 && (
                            <div className={styles.securityQuestionsContent}>
                                <div className={styles.securityQuestionsContainer}>
                                    <form id="security-questions-form" onSubmit={handleSecurityQuestionsSubmit}>
                                        <label htmlFor="security-questions">Enter Security Question:</label>
                                        <div className={styles.passwordInput}>
                                            <input
                                                type={showSecurityQuestion ? "text" : "password"}
                                                id="security-question"
                                                required
                                            />
                                            <span className={styles.togglePassword} onClick={() => setShowSecurityQuestion(!showSecurityQuestion)}>
                                                <i className={showSecurityQuestion ? "fa fa-eye-slash" : "fa fa-eye"}></i>
                                            </span>
                                        </div>

                                        <label htmlFor="security-answer">Enter Security Answer:</label>
                                        <div className={styles.passwordInput}>
                                            <input
                                                type={showSecurityAnswer ? "text" : "password"}
                                                id="security-answer"
                                                required
                                            />
                                            <span className={styles.togglePassword} onClick={() => setShowSecurityAnswer(!showSecurityAnswer)}>
                                                <i className={showSecurityAnswer ? "fa fa-eye-slash" : "fa fa-eye"}></i>
                                            </span>
                                        </div>

                                        <label htmlFor="verify-pin">Verify Pin:</label>
                                        <div className={styles.passwordInput}>
                                            <input
                                                type={showVerifyPin ? "text" : "password"}
                                                id="verify-pin"
                                                required
                                            />
                                            <span className={styles.togglePassword} onClick={() => setShowVerifyPin(!showVerifyPin)}>
                                                <i className={showVerifyPin ? "fa fa-eye-slash" : "fa fa-eye"}></i>
                                            </span>
                                        </div>

                                        <button type="submit">Save</button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings1;
