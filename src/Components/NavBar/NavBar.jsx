import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import './style.css'


function NavBar({user}) {
    

    function logout() {
        localStorage.removeItem('token');
        window.location = '/'
    }
    
    return(
        <div> 
            {/* {user && <h2>Welcome to Golf Tracker!</h2>} */}
            <ul>
                <li class='li'>
                    <Link to='/'>Home</Link>
                </li>
                {!user &&
                    <React.Fragment>
                        <li class='li'>
                            <Link to='/register'>Register</Link>
                        </li>
                        <li class='li'>
                            <Link to ='/login'>Login</Link>
                        </li>
                    </React.Fragment>
                }
                {user &&
                    <React.Fragment>
                        <li class='li'>
                            <Link to='/courses'>Courses</Link>
                        </li>
                        <li class='li'>
                            <Link to='/addcourse'>Add Course</Link>
                        </li>
                        <button onClick={logout}>Log Out</button>
                    </React.Fragment>    
                }
            </ul>
            <h1 style={{textAlign:"center"}}> Golf Tracker Home Page</h1>
            <h2 style={{textAlign:"center"}}> Play a Round, Track Your Score, Improve Your Game!</h2>
            <h3 style={{textAlign:"center"}}> Register or Login at the Top to Start</h3>
            {user && <h2 style={{textAlign:"center"}}>Welcome to Golf Tracker!</h2>}
        </div>
    );
};

export default NavBar;