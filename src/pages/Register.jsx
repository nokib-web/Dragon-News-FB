import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUsers, setUser, updateUser } = use(AuthContext);
    // const [nameError, setNameError] = useState();
    const navigate = useNavigate();


    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)

        createUsers(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({...user, displayName: name, photoURL: photo});
                        navigate('/')

                    })
                    .catch((error) => {
                        console.log(error);
                        setUser(user)
                    })
            })
            .catch(error => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }



    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-2xl font-bold">Register Your Account</h1>
                            <form onSubmit={handleRegister} >
                                <fieldset className="fieldset">
                                    {/* name */}
                                    <label className="label">Name</label>
                                    <input
                                        name='name'
                                        type="text"
                                        className="input"
                                        placeholder=" your name"
                                        required
                                    />
                                    {/* Photo */}
                                    <label className="label">Photo Url</label>
                                    <input
                                        name='photo'
                                        type="text"
                                        className="input"
                                        placeholder="Photo Url"
                                        required
                                    />
                                    {/* Email */}
                                    <label className="label">Email</label>
                                    <input
                                        name='email'
                                        type="email"
                                        className="input"
                                        placeholder="Email"
                                        required
                                    />
                                    {/* Password */}
                                    <label className="label">Password</label>
                                    <input
                                        name='password'
                                        type="password"
                                        className="input"
                                        placeholder="Password"
                                        required
                                    />

                                    {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                                    <button type='submit' className="btn  btn-neutral mt-4">Register</button>
                                </fieldset>
                            </form>
                            <p><small>Already Have An Account ? </small><Link className='font-semibold text-green-600 underline  hover:text-blue-800' to='/auth/login'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;