import { useState } from "react";
import axios from 'axios';

const RegistrationForm = (props) => {

    const [username, setUserName] = useState('');
    const [first_name, setFirstName] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    };

    const handleMiddleName = (e) => {
        setMiddleName(e.target.value)
    };

    const handleLastName = (e) => {
        setLastName(e.target.value)
    };

    const handleUserName = (e) => {
        setUserName(e.target.value)
    };

    const handleEmail = (e) => {
        setEmail(e.target.value)
    };

    const handlePassword = (e) => {
        setPassword(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newUser =
            {
                username: username,
                password: password,
                email: email,
                first_name: first_name,
                middle_name: middle_name,
                last_name: last_name,
            }
            // Can I add explicitly
        console.log("New user: ", newUser)
        let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', newUser);
        window.location = '/login'
    };

    return (
        <div>
            <div>
                <h1>User Registration</h1>
            </div>
            <form>
                <label>Username</label>
                <input onChange={handleUserName}
                value={username} type='text'/>

                <label>First Name</label>
                <input onChange={handleFirstName}
                value={first_name} type='text'/>

                <label>Middle Name</label>
                <input onChange={handleMiddleName}
                value={middle_name} type='text'/>

                <label>Last Name</label>
                <input onChange={handleLastName}
                value={last_name} type='text'/>

                <label>Email</label>
                <input onChange={handleEmail}
                value={email} type='email'/>

                <label>Password</label>
                <input onChange={handlePassword}
                value={password} type='password'/>

                <button onClick={handleSubmit} type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );


}

export default RegistrationForm;