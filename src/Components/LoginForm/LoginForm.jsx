import axios from 'axios';
import { React, useState } from 'react';


const LoginForm = (props) => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');


    const handleUserName = (e) => {
        setUserName(e.target.value)
    };

    const handlePassword = (e) => {
        setPassword(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let login = 
            {
                username: username,
                password: password,
            }

        let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', login);
        localStorage.setItem('token', response.data.access);
        window.location = '/'
    };

    return (
        <div>
            <div>
                <hi>Login</hi>
            </div>
            <form>
                <label>Username</label>
                <input onChange={handleUserName}
                value={username} type='text' />

                <label>Password</label>
                <input onChange={handlePassword}
                value={password} type='password' />

                <button onClick={handleSubmit} type='submit'>
                    Submit
                </button>
            </form>
        </div>

    );
}

export default LoginForm;