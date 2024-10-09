import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoforbank from '../../assets/logoforbank2.png';
import style from './login.module.css'; 

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('before', email, password);
        const emal = email.trim();
        const pass = password.trim();

        const userExist = emal !== '' && pass !== '';
        console.log(userExist);
        console.log('after', emal, pass);

        if (userExist) {
            navigate("/dashboard/my-account", { replace: true });
            console.log('redirect successful');
        } else {
            console.log('user does not exist');
        }
        setEmail('');
        setPassword('');
    };

    return (
        <div className={style.fullscreenBackground}>
            <div className={style.containerForLogin}>
                <div className={style.logoContainer}>
                    {/* <img src={logoforbank} className={style.logoforbank2} alt="BankLogo1" /> */}
                </div>
                <div className={style.containerForInput}>
                    <h2>LOGIN TO YOUR ACCOUNT</h2>
                    <p>Securely login to your Nobletrust Bank</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">LOG IN</button>
                    </form>
                    <p className={style.registerText}>
                        Don't have an account? <a href="#">Register</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
