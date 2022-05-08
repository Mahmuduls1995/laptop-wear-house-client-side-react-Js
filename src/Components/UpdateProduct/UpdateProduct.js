import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UpdateProduct = () => {
    const { id } = useParams();
    const [products, setProducts] = useState({});
    const [reload, setIsReload] = useState(true)

    useEffect(() => {
        const url = `https://morning-waters-97427.herokuapp.com/products/${id}`;

        fetch(url)
            .then((response) => response.json())
            .then(data => setProducts(data))


    }, [reload])

    const handleDeliver = () => {
        const stockQuantity = parseInt(products?.quantity)
        const newStockQuantity = stockQuantity - 1;
        // console.log(newStockQuantity);


        if (  newStockQuantity == 0) {
            alert("sold out")
        }

        else{

            const url = `https://morning-waters-97427.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'PUT', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        quantity: newStockQuantity,
                    }
                ),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    toast('Your Product Deliver successfully')
                    setIsReload(!reload)
                })
        }
    }



    const handleUpdateQuantity = (event) => {
        event.preventDefault();
        const previousQuantity = parseInt(products?.quantity)
        console.log(previousQuantity);
        const quantity = parseInt(event.target.quantity.value)
        const newQuantity = parseFloat(previousQuantity + quantity);
        console.log(newQuantity);

        //send data to server
        const url = `https://morning-waters-97427.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(

                {
                    quantity: newQuantity,

                }

            ),
        })

            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                toast('Stock Quantity Add successfully')
                event.target.reset()
                setIsReload(!reload)
            })

    }

    return (
        <div>

            <h2 className="text-center"> Product Name:{products?.product_name}</h2>


            <ToastContainer></ToastContainer>

            <div className='col-12 col-sm-12 col-lg-4 col-md-6 g-4  mx-auto '>

                <div className="card">
                    <img src={products?.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><strong>Product Name</strong>: {products?.product_name}</h5>
                        <p className="card-text"><strong>Description</strong>:  {products?.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Price</strong>: {products?.price}</li>

                        <li className="list-group-item"><strong>Quantity</strong>: {products?.quantity}</li>



                        <li className="list-group-item"><strong>Supplier Name</strong>: {products?.supplier_name}</li>
                    </ul>
                    <div className="card-body ">
                        <button className='btn btn-primary px-xl-5 ' onClick={handleDeliver} >Delivered</button>
                    </div>

                    <div>
                        <form onSubmit={handleUpdateQuantity}>

                            <input type="number" className="border-2 w-full text-center py-2 border-green-700 my-3" name="quantity" placeholder=" Add Quantity" />
                            <br />

                            <input type="submit" className='btn btn-primary px-xl-5 ml-4 ' value="Add Stock" />

                            <Link className="ml-10" as={Link} to="/AllPd" ><button className='btn btn-primary px-xl-5 '>All Products</button> </Link>
                        </form>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default UpdateProduct;


