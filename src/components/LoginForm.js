import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <>
            <form id="loginForm" method="POST" action="/" encType="multipart/form-data">

                    <div className="form-controller">
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username"></input>
                    </div>

                    <div className="form-controller">
                        <label for="password">Password</label>
                        <input type="password" id="password"></input>
                    </div>


                    <Link to ="/home">

                        <button id="loginButton" type="submit" value="submit">LOG IN</button>
                    
                    </Link>

            </form>  
        </>
    )
}

export default LoginForm
