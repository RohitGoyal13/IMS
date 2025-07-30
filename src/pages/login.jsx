import React , {useState} from 'react';
import { useDispatch } from 'react-redux';
import { loginsuccess } from '../features/auth/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginsuccess({email}));
    }

    return(
        <div className="login-contianer">
            <form onSubmit={handleLogin} className='login-form'>
                <h2>Login</h2>
                <input 
                type="email" 
                placeholder='Enter your Email'
                value={email}
                onChange = { (e) => setEmail(e.target.value)}
                required
                />
                <input 
                type="password"
                placeholder='Enter your Password'
                value= {password}
                onChange={ (e) => setPassword(e.target.value)}
                required
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;