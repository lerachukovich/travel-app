import React, { useEffect, useState } from 'react';
import './RegisterForm.scss';
import {Link} from 'react-router-dom';
import useHtt from '../../hooks/http.hook';
import Toast from '../../utils/Toast';

const RegisterForm = () => {
    const {loading, request, error, clearError} = useHtt();
    const [showToast, setShowToast] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    useEffect(() => {
        setTimeout(() => {
            setShowToast(false);
        }, 2000);
        clearError();
    }, [error])

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     let formData = new FormData();
    //     formData.append('name', form.name);
    //     formData.append('email', form.email);
    //     formData.append('password', form.password);
    // }

    const registerHandler = async (e) => {
        e.preventDefault();
        try {
            const data = await request('/api/users/register', 'POST', {...form})
            console.log('data', data)
        } catch (e) {
            setShowToast(true);
        }
    }

    return (
        <>
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
        <Toast isShow={showToast} />
        </>
    )
}

export default RegisterForm;
