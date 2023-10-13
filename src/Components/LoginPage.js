import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import jiraLogo from '../images/jira_logo.png';
import FaceBookLogo from '../images/facebook_logo.png';
import GoogleLogo from '../images/google_logo.jpeg';
import LinkedInLogo from '../images/linkedin_logo.png';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        setIsButtonDisabled(emailValue === '' || password === '');
        setEmailError('');

        if (!isValidEmail(emailValue)) {
            setEmailError('Please enter a valid email address.');
        }
    };

    const handlePasswordChange = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
        setIsButtonDisabled(email === '' || passwordValue === '');
        setPasswordError('');

        if (!isValidPassword(passwordValue)) {
            setPasswordError('Password must be at least 8 characters.');
        }
    };

    const handleSignIn = () => {
        if (isValidEmail(email) && isValidPassword(password)) {
            navigate('/dashboard');
        }
    };

    const isValidEmail = (email) => {
        return email !== '';
    };

    const isValidPassword = (password) => {
        return password.length >= 8;
    };

    return (
        <div className="login-container">
            <img src={jiraLogo} alt="Jira Logo" className="jira-logo" />
            <div className="login-form">
                <div className="login-title">
                    Login to Your Account
                </div>
                <div className="login-subtitle">Login using social accounts</div>
                <div className="login-social-accounts">
                    <img src={FaceBookLogo} alt="Facebook Logo" className="account-logo" />
                    <img src={GoogleLogo} alt="Google Logo" className="account-logo" />
                    <img src={LinkedInLogo} alt="LinkedIn Logo" className="account-logo" />
                </div>
                <div className="login-form-options">
                    <hr />
                    <div>
                        OR
                    </div>
                    <hr />
                </div>
                <div className="login-details">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        className="input-box"
                    />
                    {emailError && <div className="error-message">{emailError}</div>}
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="input-box"
                    />
                    {passwordError && <div className="error-message">{passwordError}</div>}
                    <button type="button" className="signin-btn" disabled={isButtonDisabled} onClick={handleSignIn}>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;