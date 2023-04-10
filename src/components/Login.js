import {auth, googleProvider} from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {useState } from 'react';
import {FcGoogle} from 'react-icons/fc';
import{useNavigate} from 'react-router-dom';
import './App.css'
function Login({setIsAuth}) {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(auth?.currentUser?.email);
    const signIn = () =>{
        createUserWithEmailAndPassword(auth, email, password).then(()=>{
        localStorage.setItem('isAuth', true);
        setIsAuth(true);
        navigate('/');
        alert("Вы зашли в аккаунт!");
    });
    };
    const signInWithGoogle = () =>{
            signInWithPopup(auth, googleProvider).then(() =>{
                localStorage.setItem('isAuth', true);
                setIsAuth(true);
                navigate('/');
                alert("Вы зашли в аккаунт!");
            });
    }
    return (
   <>
   <div className='login-card'>
    <h2>Registration</h2>
    <h3>Enter your account</h3>
    <form className='login-form'>
        <input
        type='email'
        placeholder='Email'
        onChange={(e) =>setEmail(e.target.value)}
        />
        <input 
        type='password'
        placeholder='Password'
        onChange={(e) =>setPassword(e.target.value)}
        />
         <button onClick={signIn}>Sign in</button>
         <button id='google' onClick={signInWithGoogle}><FcGoogle /></button>  
    </form>
   
   </div>
   </>
    )
}
export default Login;