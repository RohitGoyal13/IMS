import react,{useState} from 'react';
import axios from 'axios';
import '../styles/signup.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

    try{
        const response = await axios.post('http://localhost:5000/api/register', {
            username,
            password,
        })
        alert("Signup successful");
        setName('');
        setEmail(''); 
        setUsername('');
        setPassword('');
    }catch(error){
        console.error("Signup failed:", error);
        alert("Signup failed: " + (error.response?.data?.message || "Something went wrong"));
        setName('');
        setEmail('');
        setUsername('');
        setPassword('');
    }
}

return (
    <div className='signup-container'>
        <form onSubmit={handleSignup} className= 'signup-form'>
            <h2>Signup</h2>
            <input
                type='text'
                placeholder='Enter your Name'
                value={name}
                onChange= {(e) => setName(e.target.value)}
                required
            />
            <input
                type='email'
                placeholder='Enter your Email'
                value={email}
                onChange= {(e) => setEmail(e.target.value)}
                required
                />
                <input
                type='text'
                placeholder='Enter your Username'
                value={username}
                onChange= {(e) => setUsername(e.target.value)}
                required
                />
                <input
                type='password'
                placeholder='Enter your Password'
                value={password}
                onChange= {(e) => setPassword(e.target.value)}
                required
                />
                <button type='submit'>Signup</button>
            <p>Already have an account? <a href="/login" className='register-link'>Login here</a></p>
            </form>
    </div>
    )
}
export default Signup;