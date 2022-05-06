import React from 'react';

const ContactPart = () => {
    return (

        <section className='py-10 my-5 bg-purple-300 '>
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

                <div class="">
                    <div>
                        <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                        <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="" />
                    </div>
                    <div class="mt-8">
                        <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" />
                    </div>
                    <div class="mt-8">
                        <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
                        <textarea
                            class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div class="mt-8">
                        <button
                            class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </div>

            </div>
        </section>

    );
};

export default ContactPart;