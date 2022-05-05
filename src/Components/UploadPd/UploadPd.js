import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
const UploadPd = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = (data, event) => {
        console.log(user);
        event.preventDefault();
        const url = 'http://localhost:5000/uploadPd';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                data
            }),
            headers: {

                'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                event.target.reset();
            });

    }
    return (
        <div className='container'>
            <h2 className='text-center my-5 font-bold underline'>Upload Product</h2>

            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Product Name" className="border text-center py-2 px-2" {...register("product_name")} />
                <input placeholder="Photo Url" className=" px-2 text-center py-2 my-3 border " type="text" {...register("img")} />
                <textarea placeholder="Description" className="px-2 text-center border mb-2" {...register("description")} />
                <input placeholder="Price" className=" px-2 border text-center py-2 mb-2" type="number" {...register("price")} />
                <input placeholder="Quantity" className=" px-2 text-center border py-2 mb-2" type="number" {...register("quantity")} />
                <input placeholder="Supplier Name" className="border text-center py-2 my-3 px-2" {...register("supplier_name")} />
                <input className="border py-1 text-white  bg-primary ease-in duration-300 " type="submit" value="Upload Product " />
            </form>


        </div>
    );
};

export default UploadPd;