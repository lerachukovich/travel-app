import React from 'react';
import './RegisterForm.scss';
import {Link} from 'react-router-dom';

const RegisterForm = () => {
    return (
        <div class="register-page-wrapper">
            <div class="card text-white bg-danger mb-3 register-form">
                <div class="card-header">Register</div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter your name" />
                        </div>
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
                    <button type="button" class="btn btn-danger register-btn">Register</button>
                    <Link to="/login">
                        <button type="button" class="btn btn-secondary">Login</button>                    
                    </Link>
                </div>
            </div>

        </div>
    )

}

export default RegisterForm;