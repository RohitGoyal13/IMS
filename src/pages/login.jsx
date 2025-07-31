import React , {useState} from 'react';
import { useDispatch } from 'react-redux';
import { loginsuccess } from '../features/auth/authSlice';
import '../styles/login.css';

const Login = () => {
    const dispatch = useDispatch();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try{
        const response =  await fetch('http://localhost:5000/api/login' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email,password})
        })

        const data = await response.json();

        if(response.ok){
            dispatch(loginsuccess({token : data.token, email}));
            alert("Login successful");
        }
        else{
            alert("Login failed: " + data.message || "Something went wrong");
            console.error("Error:", data.message);
            setEmail('');
            setPassword('');
        }
        }
        catch(error){
            console.error("Login failed:", error);
        }
    }

    return(
        <div className="login-container">
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
                <p>Don't have an account? <a href="/register" className='register-link'>Register here</a></p>
            </form>
        </div>
    )
}

export default Login;