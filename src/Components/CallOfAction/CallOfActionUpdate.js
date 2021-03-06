import React from 'react';
import './Action.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
const CallOfActionUpdate = () => {

    const handleAddUser = (event) => {
        event.preventDefault();
        const email = event.target.email.value;


        const user = { email }

        //send data to server mdn fetch
        fetch("https://morning-waters-97427.herokuapp.com/subscriber", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })

            .then(response => response.json())
            .then(data => {

                console.log('Success:', data);
                toast('Subscribe successfully');
                event.target.reset()
            })

    }

    return (

        <div className="action w-full dark:bg-coolGray-500">
            <ToastContainer></ToastContainer>
            <form onSubmit={handleAddUser}>
                <div class="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                    <h1 className="text-5xl text-white antialiased font-semibold leading-none text-center dark:text-coolGray-100">Get Our Updates</h1>
                    <p className="text-white pt-2 pb-8 text-xl antialiased text-center dark:text-coolGray-100">Find out about events and other news</p>

                    <div class="flex flex-row">
                        <input type="text" name="email" placeholder="example@email.com" class="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                        <button type="submit" class="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-coolGray-900">Subscribe</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CallOfActionUpdate;