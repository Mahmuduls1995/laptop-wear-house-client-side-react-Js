import React from 'react';
import { useForm } from 'react-hook-form';
const UploadPd = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data,event) => {
        console.log(data);
        event.preventDefault();
        const url = 'http://localhost:5000/uploadPd';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
               data
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                // 'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
                // 'Content-type': 'application/json; charset=UTF-8',
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
            <h2 className='text-center my-5 font-bold'>Upload Product</h2>

            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Product Name" className="border text-center py-2 px-2" {...register("product name")} />
                <input placeholder="Photo Url" className=" px-2 text-center py-2 my-3 border " type="text" {...register("img")} />
                <textarea placeholder="Description" className="px-2 text-center border mb-2" {...register("description")} />
                <input placeholder="Price" className=" px-2 border text-center py-2 mb-2" type="number" {...register("price")} />
                <input placeholder="Quantity" className=" px-2 text-center border py-2 mb-2" type="number" {...register("quantity")} />
                <input placeholder="Supplier Name" className="border text-center py-2 my-3 px-2" {...register("supplier name")} />
                <input className="border py-1" type="submit" value="Upload Product " />
            </form>

            {/* <div className='w-50 mx-auto'>
                <form onSubmit={handleUpload}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Product Name</label>
                        <input type="text" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Price</label>
                        <input type="text" name="price" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-primary">Upload</button>
                </form>
            </div> */}
        </div>
    );
};

export default UploadPd;