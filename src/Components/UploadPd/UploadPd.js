import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
const UploadPd = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);



    const onSubmit = (data, event) => {
        event.preventDefault();

        const order = {
            email: user.email,
            product_name: data.product_name,
            img: data.img,
            description: data.description,
            price: data.price,
            quantity: data.quantity,
            supplier_name: data.supplier_name,

        }

        axios.post('https://morning-waters-97427.herokuapp.com/order', order)
            .then(response => {
                const data = response;
                if (data.insertedId) {
                    toast('Your upLoad is successfully')
                }
                console.log(response);
            })



        const url = 'https://morning-waters-97427.herokuapp.com/uploadPd';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                toast('Your upLoad is successfully')
                event.target.reset();
            });

    }
    return (
        <div className='container bg-gray-400'>
            <h2 className='text-center my-5 font-bold underline p-3'>Upload Product</h2>

            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Product Name" name="product_name" className="border text-center py-2 px-2" {...register("product_name")} />
                <input placeholder="Photo Url" name="img" className=" px-2 text-center py-2 my-3 border " type="text" {...register("img")} />
                <textarea placeholder="Description" name="description" className="px-2 text-center border mb-2" {...register("description")} />
                <input placeholder="Price" name="number" className=" px-2 border text-center py-2 mb-2" type="number" {...register("price")} />
                <input placeholder="Quantity" name="quantity" className=" px-2 text-center border py-2 mb-2" type="number" {...register("quantity")} />
                <input placeholder="Supplier Name" name="supplier_name" className="border text-center py-2 my-3 px-2" {...register("supplier_name")} />

                <input className="transition duration-500 transform px-6 py-2 m-4 inline
               bg-teal-400 hover:bg-indigo-400
               border-2 border-green-500 hover:border-yellow-500
               hover:text-white
               w-50 mx-auto
               hover:shadow-md
               hover:scale-125" type="submit" value="Upload Product " />
            </form>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UploadPd;