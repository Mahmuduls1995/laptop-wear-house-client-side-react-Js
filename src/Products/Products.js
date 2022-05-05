import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div>
            <h2>All products Is:{products.length}</h2>
            <div className="row">
                <ToastContainer />
                {   
                    products.slice(0,6).map(pd => (<div className='col-4 g-4  mx-auto ' key={pd._id}>

                        
                        <div className="card">
                            <img src={pd.data.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"><strong>Product Name</strong>: {pd.data.product_name}</h5>
                                <p className="card-text"><strong>Description</strong>:  {pd.data.description}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Price</strong>: {pd.data.price}</li>
                                <li className="list-group-item"><strong>Quantity</strong>: {pd.data.quantity}</li>
                                <li className="list-group-item"><strong>Supplier Name</strong>: {pd.data.supplier_name}</li>
                            </ul>
                            <div className="card-body ">

                            <button className='btn btn-primary px-xl-5 '>Update</button>                                
                                                           

                                {/* <Link href="#" className="card-link">Card link</Link>
                                <Link href="#" className="card-link">Another link</Link> */}
                            </div>
                        </div>

                      
                    </div>))
                }
            </div>
        </div>
    );
};

export default Products;