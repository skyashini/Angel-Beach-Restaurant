import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import UserService from '../services/UserService';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const from = location.state?.from?.pathname || "/";

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (user.password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        try {
            const response = await UserService.login(user.email, user.password);

            if (response) {
                toast.success('User Logged in successfully!');
                localStorage.setItem('userId', response.id);

                if (response.name.toLowerCase() === "admin") {
                    navigate("/admin");
                } else {
                    navigate("/reservations");
                }
            } else {
                toast.error('Login failed. Please check your credentials.');
            }
        } catch (error) {
            setError(error.message);
            toast.error('Failed to login');
            alert(error.message);
        }
    };

    return (
        <div className="login-container d-flex justify-content-center align-items-center vh-100">
            <div className="login-card shadow-lg p-4 rounded-3">
                {/* Form Section */}
                <div className="d-flex flex-column align-items-center justify-content-center bg-light rounded">
                    <div className="w-100 px-4 py-5">
                        <h2 className="text-center text-primary mb-4">Login</h2>
                        <form onSubmit={handleSubmit} className="w-100">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="form-control"
                                    value={user.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="form-control"
                                    value={user.password}
                                    onChange={handleChange}
                                    minLength={6}
                                    required
                                />
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary btn-lg">Login</button>
                                <Toaster />
                            </div>
                        </form>
                        {error && (
                            <div className="text-danger text-center mt-3">
                                {error}
                            </div>
                        )}
                    </div>
                    <div className="google-login w-100 text-center mt-3">
                        <Link className="btn btn-outline-secondary d-flex align-items-center justify-content-center">
                            <FcGoogle className="me-2" />
                            Continue with Google
                        </Link>
                        <Toaster />
                    </div>
                    <div className="card-footer text-center mt-4">
                        <p>New to Food Monster? <Link to="/signup" className="text-primary fw-bold">Sign Up here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
