import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import auth from '../../firebase.init';
import { useAuthState, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (loading ) {
        <Loading></Loading>
    }
    if (error) {
        errorElement = <div>
            <p className="text-danger">Error: {error?.message}</p>
        </div>
    }
   
   
    if (user || error) {
       
        navigate('/home')
    }
    return (

       
        <div className="">

            {errorElement}

            <div className="mt-2 sm:w-full ml-6 mb-4" >
                <button
                    onClick={() => signInWithGoogle()}
                    className=" bg-info d-flex justify-content-center align-items-center w-80 d-block rounded-md  mx-auto">
                    <FcGoogle className="" size="40px" />
                    <p className=" mx-4 mt-2 fs-3 font-semibold " >Google Sign In</p>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;