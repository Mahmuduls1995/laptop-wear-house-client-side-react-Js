import React, { useRef, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [user2] = useAuthState(auth);
    const emailRef = useRef(' ');
    const passwordRef = useRef(' ');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>

    }
    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
   
    if (user2) {
        console.log(user2);
        const url = 'http://localhost:5000/login';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: user2.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) =>{
                localStorage.setItem("accessToken", data.token);
                navigate(from, { replace: true });
            });
    }
   

  

    const handleSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }

    const reseatPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address')
        }
    }
    return (

        <div className="w-1/3 mx-auto mt-1 border-1 shadow-md bg-gray-300  rounded-md">
            <h2 className="text-center text-2xl font-bold p-4">Login</h2>
            <form onSubmit={handleSignIn} className="ml-28">
                <div>
                    <h4 htmlFor="email">Email: </h4>
                    <input onBlur={handleEmailBlur} ref={emailRef} type="email" className="placeholder-shown:border-gray-500 border-2 text-center px-2 w-80 h-12 rounded-2" placeholder="Email" required />
                </div>
                <div className="mt-2">
                    <h4 htmlFor="email">Password: </h4>
                    <input onBlur={handlePasswordBlur} ref={passwordRef} type="password" className="placeholder-shown:border-gray-500 border-2 text-center px-2 w-80 h-12 rounded-2" placeholder="Password" required />
                </div>
                <p className="text-center text-xl text-red-600 mr-16 mt-3">{error?.message}</p>
                {
                    loading && <p className="text-center text-xl text-neutral-900 mr-16 mt-3 ">Loading....</p>
                }

                <button className="mx-auto w-80 h-12 border-3 mt-3 bg-purple-600 text-white font-semibold rounded-md">Login</button>

            </form>

            <p className="text-center mt-2">New Customer ? <Link className="underline text-blue-800" to="/signup">Create an account</Link></p>

            <p className="text-center mt-2">Forget Password ? <button className="text-primary btn btn-link" onClick={reseatPassword}>Reseat password</button></p>

            <SocialLogin></SocialLogin>
            <ToastContainer />

        </div>
    );
};

export default Login;