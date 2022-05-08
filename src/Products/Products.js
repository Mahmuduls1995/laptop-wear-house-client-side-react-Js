import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://morning-waters-97427.herokuapp.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div className="bg-gray-200">

            <h2 className="text-center my-3 text-green-700 p-4 ">OUR PRODUCTS</h2>

            <div className="">

                <div className="row">

                    {
                        products.slice(0, 6).map(pd => (

                            <div className='col-12 col-sm-12 col-xl-4 col-lg-4 col-md-6  g-4 mx-auto' key={pd._id}>
                                <div className="card py-4">
                                    <div className="w-80  mx-auto h-fit transform cursor-pointer hover transition duration-500 hover:scale-125">
                                        <img src={pd.img} className="card-img-top " alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>Product Name</strong>: {pd.product_name}</h5>
                                        <p className="card-text"><strong>Description</strong>:  {pd.description.slice(0, 80)}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><strong>Price</strong>: {pd.price}</li>
                                        <li className="list-group-item"><strong>Quantity</strong>: {pd.quantity}</li>
                                        <li className="list-group-item"><strong>Supplier Name</strong>: {pd.supplier_name}</li>
                                    </ul>
                                    <div className="card-body ">

                                        <Link to={`/update/${pd._id}`}><button className='btn btn-primary px-xl-5 '>Update</button> </Link>

                                    </div>
                                </div>


                            </div>)

                        )
                    }
                </div>

            </div>



        </div>
    );
};

export default Products;