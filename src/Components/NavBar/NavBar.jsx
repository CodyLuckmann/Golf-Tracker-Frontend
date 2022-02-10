import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';


function NavBar({user}) {
    

    function logout() {
        localStorage.removeItem('token');
        window.location = '/'
    }

    return(
        <div>
            {user && <h2>Welcome to Golf Tracker!</h2>}
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                {!user &&
                    <React.Fragment>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>
                        <li>
                            <Link to ='/login'>Login</Link>
                        </li>
                    </React.Fragment>
                }
                {user &&
                    <React.Fragment>
                        <button onClick={logout}>Log Out</button>
                    </React.Fragment>    
                }
            </ul>
        </div>
    );
};

export default NavBar;