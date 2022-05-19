import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function onHandleUserNameTextChanged(e) {
        setUserName(e.target.value);
    }

    function onHandlePasswordTextChanged(e) {
        setPassword(e.target.value);
    }

    async function handleLogin(e) {
        e.preventDefault();

        const url = `${process.env.REACT_APP_BASEURL}/auth/login`;
        console.log(url);

        const user = {
            userName: userName, //fetched from setUserName. can use only the name without specifying the parameter if they are the same userName: userName === userName
            password: password
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        console.log(response);

        if (response.status >= 200 && response.status <= 299) {
            const result = await response.json();
            console.log(result);
            localStorage.setItem('token', result.token);    // Will have to be parsed when read in VehicleList.jsx
            navigate(`/list`);
        }
        else {
            console.log("Unable to login");
        }
    }
    return (
        <>
            <h1 className='page-title'>Login</h1>
            <section className='form-container'>
                <h4>Login details</h4>
                <section className='form-wrapper'>
                    <form className='form' onSubmit={handleLogin}>
                        <div className='form-control'>
                            <label htmlFor='userName'>Username</label>
                            <input onChange={onHandleUserNameTextChanged} value={userName} type='text' id='username' name='username' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='password'>Password</label>
                            <input onChange={onHandlePasswordTextChanged} value={password} type='password' id='password' name='password' />
                        </div>
                        <div className='buttons'>
                            <button type='submit' className='btn'>
                                Login
                            </button>
                        </div>
                    </form>
                </section>
            </section>
        </>
    );
}

export default Login;