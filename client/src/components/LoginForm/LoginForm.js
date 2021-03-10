import React from 'react';
import './LoginForm.scss';
import {Link} from 'react-router-dom';

const LoginForm = () => {
    return (
        <div className="login-page-wrapper">
            <div className="card text-white bg-danger mb-3 login-form">
                <div className="card-header">
                    <Link to="/register">
                        <button type="button" className="btn disabled btn-white">Register</button>
                    </Link>
                    <button type="button" className="btn btn-secondary">Login</button>                    
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="form-control" id="btn" placeholder="" />
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )

}

export default LoginForm;
