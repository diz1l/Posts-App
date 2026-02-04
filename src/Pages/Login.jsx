import React, {useContext} from 'react';
import '../styles/login.css';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import {AuthContext} from "../context";

const Login = () => {

    const {setIsAuth} = useContext(AuthContext);

    const loginHandler = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-header">
                    <h1>Welcome Back</h1>
                    <p>Sign in to continue to Posts App</p>
                </div>

                <form className="login-form" onSubmit={loginHandler}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <Input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="form-options">
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="forgot-link">Forgot password?</a>
                    </div>

                    <Button type="submit" className="login-button">
                        Sign In
                    </Button>
                </form>

                <div className="login-footer">
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;