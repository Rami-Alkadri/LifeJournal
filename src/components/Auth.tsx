import { useState } from 'react';
import { signIn, signUp } from '../api/auth';

export function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSignup = async () => {
        const { error } = signUp(email, password);
        setError(error?.message || null);
    };

    const handleLogin = async () => {
        const {error} = signIn(email, password);
        setError(error?.message || null);
    }

    return (
        <div>
            <h1>Signup / Log In</h1>
            <input value={email} placeholder='Enter your email' onChange={e => setEmail(e.target.value)}></input>
            <input value={password} type='password' placeholder='Enter your password' onChange={e => setPassword(e.target.value)}></input>
            <button onClick={handleSignup}>Sign up</button>
            <button onClick={handleLogin}>Log in</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}

export default Auth;