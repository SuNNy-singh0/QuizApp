import React, { useState } from 'react'
import Menubar from './Menubar'
import Adminpanel from './Adminpanel';
function Verify() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === 'albert' && password === 'ramram') {
            // Redirect to the admin page if login is successful
            setIsLoggedIn(true);
        } else {
            // Handle incorrect login
            alert('Incorrect username or password');
        }
    };
    if (isLoggedIn) {
        return <Adminpanel />;
    }
    return (
        <>
            <Menubar />
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <label><h1>Name</h1></label>
                    <input
                        type='text'
                        name='username'
                        placeholder='Enter your name'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br></br>
                    <label><h1>password</h1></label>
                    <input
                        type='password'
                        name='password'
                        placeholder='Enter the password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br></br>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Verify