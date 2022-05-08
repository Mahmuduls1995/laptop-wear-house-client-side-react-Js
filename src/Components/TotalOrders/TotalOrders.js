import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const TotalOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `https://morning-waters-97427.herokuapp.com/order?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                });
                setOrders(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();

    }, [user])
    return (
        <div className="bg-gray-300">
            <h2 className="text-center my-3">Total Orders</h2>
            <div className="row">

                {
                    orders.map(order =>
                        <div key={order._id} className="col-4 col-sm-12 col-md-4   mx-auto my-3">

                            <div className="card">
                                <div className="w-80  mx-auto h-fit transform cursor-pointer hover transition duration-500 hover:scale-125">
                                    <img src={order.img} className="card-img-top " alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Product Name</strong>: {order?.product_name}</h5>
                                    <p className="card-text"><strong>Description</strong>:  {order?.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Price</strong>: {order?.price}</li>

                                    <li className="list-group-item"><strong>Quantity</strong>: {order?.quantity}</li>

                                    <li className="list-group-item"><strong>Supplier Name</strong>: {order?.supplier_name}</li>
                                </ul>
                                <div className="card-body ">
                                    <button className='btn btn-primary px-xl-5 ' >CheckOut</button>
                                </div>
                            </div>




                        </div>)
                }
            </div>
        </div>




    );
};

export default TotalOrders;