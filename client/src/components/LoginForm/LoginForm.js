import React from 'react';
import './LoginForm.scss';
import {Link} from 'react-router-dom';

const LoginForm = () => {
    return (
        <div class="login-page-wrapper">
            <div class="card text-white bg-danger mb-3 login-form">
                <div class="card-header">Login</div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Password" />
                        </div>                    
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger login-btn">Login</button>
                    <Link to="/register">
                        <button type="button" class="btn btn-secondary">Register</button>                    
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default LoginForm;