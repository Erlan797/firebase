import {auth} from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
export const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = async () =>{
        await createUserWithEmailAndPassword(auth, email, password);
    }
    return (
        <div>
            <input type="email" placeholder="Email...." 
            onChange={(e) => setEmail(e.target.value)}/>
            <input type='password' placeholder="Password...."
            onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={signIn}>Sign in</button>
        </div>
    )
}