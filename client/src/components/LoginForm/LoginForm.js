import React from 'react';
import './LoginForm.scss';
import {Link} from 'react-router-dom';

const LoginForm = () => {
    return (
        <div className="login-page-wrapper">
            <div className="card text-white bg-danger mb-3 login-form">
                <div className="card-header">Login</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label for="email">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger login-btn">Login</button>
                    <Link to="/register">
                        <button type="button" className="btn btn-secondary">Register</button>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default LoginForm;
