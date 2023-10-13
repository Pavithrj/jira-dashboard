import React, { useState } from 'react';
import './SignUpPage.css';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        validateEmail(emailValue);
        checkButtonStatus();
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        checkButtonStatus();
    };

    const handlePasswordChange = (e) => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
        validatePassword(passwordValue);
        checkButtonStatus();
    };

    const handleConfirmPasswordChange = (e) => {
        const confirmPasswordValue = e.target.value;
        setConfirmPassword(confirmPasswordValue);
        validateConfirmPassword(confirmPasswordValue);
        checkButtonStatus();
    };

    const validateEmail = (email) => {
        if (!isValidEmail(email)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
    };

    const validatePassword = (password) => {
        if (!isValidPassword(password)) {
            setPasswordError('Password must be at least 8 characters.');
        } else {
            setPasswordError('');
        }
    };

    const validateConfirmPassword = (confirmPassword) => {
        if (confirmPassword !== password) {
            setConfirmPasswordError('Passwords do not match.');
        } else {
            setConfirmPasswordError('');
        }
    };

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const isValidPassword = (password) => {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(password);
    };

    const checkButtonStatus = () => {
        if (email && username && password && confirmPassword && !emailError && !passwordError && !confirmPasswordError) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    };

    const handleSubmit = () => {
        navigate('/dashboard');
    };

    return (
        <div className="signup-page">
            <div className="signup-header">Create Your Account</div>
            <div className="signup-form">
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                {emailError && <div className="error-message">{emailError}</div>}
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                {passwordError && <div className="error-message">{passwordError}</div>}
                <label>Confirm Password</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                />
                {confirmPasswordError && <div className="error-message">{confirmPasswordError}</div>}
                <div className="signup-page-btn">
                    <button type="submit" className="signup-btn" onClick={handleSubmit} disabled={isButtonDisabled}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;