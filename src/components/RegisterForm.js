import React from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    return (
        <>
            <form id="loginForm" method="POST" action="/" encType="multipart/form-data">

                <div className="form-controller">
                    <label for="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName"></input>
                </div>

                <div className="form-controller">
                    <label for="lastName">Last Name</label>
                    <input type="lastName" id="lastName"></input>
                </div>

                <div className="form-controller">
                    <label for="email">Email</label>
                    <input type="email" id="email"></input>
                </div>

                <div className="form-controller">
                    <label for="password">Password</label>
                    <input type="password" id="password"></input>
                </div>

                <div className="form-controller">
                    <label for="profileImg">Upload Profile Image</label>
                    <input type="file" name="profileImg" id="profileImg"></input>
                </div>

                <Link to ="/home">

                    <button id="loginButton" type="submit" value="submit">REGISTER</button>

                </Link>

                </form>  
        </>
    )
}

export default RegisterForm
