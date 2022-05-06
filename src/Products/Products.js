import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div>
            <h2 className="text-center my-3 text-green-700">All products Is Here</h2>
            <div className="row">

                {
                    products.slice(0, 6).map(pd => (<div className='col-4 col-sm-12 col-md-4 g-4  mx-auto ' key={pd._id}>
                        <div className="card">
                            <img src={pd.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"><strong>Product Name</strong>: {pd.product_name}</h5>
                                <p className="card-text"><strong>Description</strong>:  {pd.description.slice(0,90)}</p>
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


                    </div>))
                }
            </div>

            <div className="text-center mt-4">
            <Link as={Link} to="/products" ><button className='btn btn-primary px-xl-5 '>Manage All Products</button> </Link>
            </div>
        </div>
    );
};

export default Products;