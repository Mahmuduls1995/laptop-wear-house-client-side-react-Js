import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../firebase.init';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, hookError, user] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [sendEmailVerification, sending, error2] = useSendEmailVerification(auth);


    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/');
    }
    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your password not match')
            return;

        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long')
            return;
        }

        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className="w-1/3 mx-auto border-2 shadow-md rounded-md bg-gray-300">
        <h1 className="text-center text-2xl font-bold p-4">SignUp</h1>
        <form onSubmit={handleCreateUser} className="ml-28">
            <div>
                <h4 htmlFor="email">Email: </h4>
                <input onBlur={handleEmailBlur} type="email" className="placeholder-shown:border-gray-500 border-2 text-center px-2 w-80 h-12 rounded-2" placeholder="Email" required />
            </div>


            <div className="mt-2">
                <h4 htmlFor="password">Password: </h4>
                <input onBlur={handlePasswordBlur} type="password" className="placeholder-shown:border-gray-500 border-2 text-center px-2 w-80 h-12 rounded-2" placeholder="Password" required />
            </div>

            <div className="mt-2">
                <h4 htmlFor="password">Confirm Password: </h4>
                <input onBlur={handleConfirmPasswordBlur} type="password" className="placeholder-shown:border-gray-500 border-2 text-center px-2 w-80 h-12 rounded-2" placeholder="Confirm Password" required />
            </div>

            <p className="text-center text-xl text-red-600 mr-16 mt-3">{error}</p>
            <p className="text-center text-xl text-red-600 mr-16 mt-3">{hookError}</p>

            <button className="mx-auto w-80 h-12 border-3 mt-3 bg-purple-600 text-white font-semibold rounded-md"
                onClick={async () => {
                    await sendEmailVerification();
                    alert('Sent email Verification');
                }}
            >SignUp</button>

           
        </form>
        <p className="text-center mt-1">Already Have an Account? <Link className="underline text-emerald-700" to="/login">Login</Link></p>



        <SocialLogin></SocialLogin>
       
    </div>
    );
};

export default SignUp;