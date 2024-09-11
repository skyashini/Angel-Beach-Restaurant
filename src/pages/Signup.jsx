import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from 'react-hot-toast';
import UserService from '../services/UserService';
import './SignUp.css';  // Assume this contains the updated styles

const SignUp = () => {
    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/login";

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (user.password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return; // Stop form submission
        }

        try {
            const response = await UserService.signup(user.name, user.email, user.password);
            toast.success('User registered successfully!');
            navigate("/");
        } catch (error) {
            setError(error.message);
            toast.error('Failed to register');
        }
    };

    const socialSignIn = () => {
        // Handle Google Sign-In here
    };

    return (
        <div className="signup-container d-flex justify-content-center align-items-center vh-100">
            <div className="signup-card shadow-lg p-4 bg-white rounded">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-center text-primary mb-4">Create an Account</h2>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="form-control"
                            value={user.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
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
                            placeholder="Password"
                            className="form-control"
                            value={user.password}
                            onChange={handleChange}
                            minLength={6}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary w-100 btn-lg">Sign Up</button>
                    </div>
                    {error && (
                        <div className="text-danger text-center mt-3">
                            {error}
                        </div>
                    )}
                    <Toaster />
                </form>
                <div className="text-center my-4">
                    <button onClick={socialSignIn} className="btn btn-outline-secondary d-flex align-items-center justify-content-center">
                        <FcGoogle className="me-2" /> Continue with Google
                    </button>
                </div>
                <div className="text-center">
                    <p>Already have an account? <Link to="/login" className="text-primary fw-bold">Login here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
