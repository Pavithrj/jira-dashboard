import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthAccess.css';
import LoginPage from './LoginPage';

function AuthAccess() {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/signup');
    };

    return (
        <div className="authAccess-container">
            <LoginPage />
            <div className="signup-container">
                <div className="signup-title">New Here?</div>
                <div className="signup-subtitle">Sign up and discover a great amount of new opportunities!</div>
                <button type="button" onClick={handleSignUp} className="signup-btn">
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default AuthAccess;