import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://morning-waters-97427.herokuapp.com/reviews')
            .then((response) => response.json())
            .then((data) => setReviews(data));
    }, []);
    return (

        <section className="bg-gray-300 py-5 mt-3  rounded-md">
            <div>
                <h2 className="text-center my-1  text-primary">Customer Review Here</h2>
                <div className="row">

                    {
                        reviews.slice(0, 3).map(review => (
                        
                        <div className='col-12 col-sm-12 mt-2 col-md-6 col-xl-4 col-lg-4  mx-auto' key={review._id}>


                            <Card className="border-0 shadow-lg  ">
                                <div className="transform cursor-pointer hover transition duration-500 hover:scale-125">

                                    <Card.Img className="w-50 mx-auto rounded-full" variant="top" src={review.img} />
                                </div>
                                <Card.Body>
                                    <Card.Title>Name: {review.name}</Card.Title>
                                    <Card.Text>Rating : {review.ratings}</Card.Text>
                                    <Card.Text>Review: {review.review.slice(0, 90)} ...</Card.Text>
                                </Card.Body>
                            </Card>

                        </div>))
                    }
                </div>
            </div>
        </section>
    );
};

export default Review;