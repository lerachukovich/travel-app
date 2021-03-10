import React, { useEffect, useState } from 'react';
import './RegisterForm.scss';
import {Link} from 'react-router-dom';
import useHtt from '../../hooks/http.hook';
import useMessage from '../../hooks/message.hook';

const RegisterForm = () => {
    const message = useMessage();
    const {loading, request, error, clearError} = useHtt();

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        // password2: ''
    })

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('password', form.password);
    }

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    const registerHandler = async (e) => {
        e.preventDefault();
        try {
            const data = await request('/api/users/register', 'POST', {...form})
            console.log('data', data)
            message(data.message);
        } catch (e) {}
    }

    return (
        <div className="register-page-wrapper">
            <div className="card text-white bg-danger mb-3 register-form">
                <div className="card-header">
                    <button type="button" className="btn btn-secondary">Register</button>
                    <Link to="/login">
                        <button 
                            type="button" 
                            className="btn disabled btn-white"
                            disabled={loading} >
                                Login</button>
                    </Link>
                </div>
                <div className="card-body">
                    <form 
                        onSubmit={registerHandler}
                        encType='multipart/form-data' >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="name" 
                                aria-describedby="emailHelp" 
                                placeholder="Enter your name"
                                value={form.name}
                                onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                name="email" 
                                aria-describedby="emailHelp" 
                                placeholder="Enter email"
                                value={form.email}
                                onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                name="password" 
                                placeholder="Password"
                                value={form.password}
                                onChange={changeHandler} />
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="password">Confirm password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                name="password2" 
                                placeholder="Password"
                                value={form.password2}
                                onChange={changeHandler} />
                        </div> */}
                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="form-control" 
                                id="btn"
                                disabled={loading}  />
                        </div>
                    </form>
                </div>
                
            </div>

        </div>
    )
}

export default RegisterForm;
