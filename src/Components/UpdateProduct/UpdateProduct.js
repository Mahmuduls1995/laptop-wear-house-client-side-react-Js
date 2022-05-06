import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams();
    // const [deliver, setDeliver] = useState(0);
    const [products, setProducts] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;

        fetch(url)
            .then((response) => response.json())
            .then(data => setProducts(data))


    }, [])

    const handleDeliver = () => {
        const stockQuantity = parseInt(products?.quantity)
        const newStockQuantity = stockQuantity - 1;
        console.log(newStockQuantity);
        // const productQuantity = {newStockQuantity}

        const url = `http://localhost:5000/products/${id}`;
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
                alert('Your Product Deliver successfully')

            })
    }


    const handleUpdateQuantity = (event) => {
        event.preventDefault();
        const previousQuantity = parseInt(products?.quantity)
        console.log(previousQuantity);
        const quantity = parseInt(event.target.quantity.value)
        const newQuantity = parseFloat(previousQuantity + quantity);
        console.log(newQuantity);

        //send data to server
        const url = `http://localhost:5000/products/${id}`;
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
                alert('Stock Quantity Add successfully')
                event.target.reset()
            })

    }


    // const handleDeliver = () => {

    //     const quantity =parseInt(products.quantity);
    //     const quantityAdd =quantity-1;
    //     console.log(quantityAdd);
    //     return quantityAdd ;
    // }

    return (
        <div>

            <h2 className="text-center"> Product Name:{products?.product_name}</h2>




            <div className='col-4 col-sm-12 col-md-4 g-4  mx-auto '>

                <div className="card">
                    <img src={products?.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><strong>Product Name</strong>: {products?.product_name}</h5>
                        <p className="card-text"><strong>Description</strong>:  {products?.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Price</strong>: {products?.price}</li>

                        <li className="list-group-item"><strong>Quantity</strong>: {products?.quantity}</li>

                        {/* <li className="list-group-item"><strong>Quantity</strong>: </li>
                        <input type="text" name="quantity"  value={products?.data?.quantity}/> */}


                        <li className="list-group-item"><strong>Supplier Name</strong>: {products?.supplier_name}</li>
                    </ul>
                    <div className="card-body ">
                        <button className='btn btn-primary px-xl-5 ' onClick={handleDeliver} >Delivered</button>
                        {/* <button className='btn btn-primary px-xl-5 ' onClick={()=>setDeliver(deliver-1)} >Delivered</button> */}


                    </div>

                    <div>
                        <form onSubmit={handleUpdateQuantity}>

                            <input type="number" className="border-2 w-full text-center py-2 border-green-700 my-3" name="quantity" placeholder=" Add Quantity" />
                            <br />

                            <input type="submit" className='btn btn-primary px-xl-5 ml-4 ' value="Add Stock" />

                            <Link className=" ml-10"as={Link} to="/AllPd" ><button className='btn btn-primary px-xl-5 '>All Products</button> </Link>
                        </form>

                    </div>
                    
                         {/* 
                    <div className="text-center">
                        <Link as={Link} to="/AllPd" ><button className='btn btn-primary px-xl-5 '>All Products</button> </Link>
                    </div> */}

                </div>
            </div>

        </div>
    );
};

export default UpdateProduct;

