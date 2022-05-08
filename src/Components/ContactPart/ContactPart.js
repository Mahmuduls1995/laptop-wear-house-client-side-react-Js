import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
const ContactPart = () => {
     
    const handleAddUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        const user = {name, email,message}
        
        //send data to server mdn fetch
        fetch("https://morning-waters-97427.herokuapp.com/contact",{
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })

            .then(response => response.json())
            .then(data => {

                console.log('Success:', data);
                toast('Message send successfully');
                event.target.reset()
            })

    }


    return (

        <section className='py-10 my-5 bg-purple-300 '>
            <ToastContainer></ToastContainer>
            <h2 className='text-center text-white my-4'>Have You any Question ? Contact Us.</h2>
            <div className='grid items-center w-full grid-cols-1 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>

                <div>
                    <div className='w-full bg-gray-200 mt-3 rounded-lg'>
                        <img className="w-full"
                            style={{ height: '460px' }}
                            src='https://i.ibb.co/Gvk4Y9C/Pngtree-contact-us-flat-design-style-5874427.png'
                            alt=''
                        />
                    </div>
                </div>

              <form onSubmit={handleAddUser}>
                    <div>
                        <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                        <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" name="name" placeholder="Full Name" />
                    </div>
                    <div class="mt-8">
                        <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" name="email" placeholder="Email" />
                    </div>
                    <div class="mt-8">
                        <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
                        <textarea
                            class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" name="message" type="text" placeholder="Message"></textarea>
                    </div>
                    <div class="mt-8">
                        <button  type="submit"
                            class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
              </form>

            </div>
        </section>

    );
};

export default ContactPart;