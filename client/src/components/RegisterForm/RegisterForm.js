import React from 'react';
import './RegisterForm.scss';
import {Link} from 'react-router-dom';

const RegisterForm = () => {
    return (
        <div className="register-page-wrapper">
            <div className="card text-white bg-danger mb-3 register-form">
                <div className="card-header">Register</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter your name" />
                        </div>
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
                    <button type="button" className="btn btn-danger register-btn">Register</button>
                    <Link to="/login">
                        <button type="button" className="btn btn-secondary">Login</button>
                    </Link>
                </div>
            </div>

        </div>
    )

}

export default RegisterForm;
