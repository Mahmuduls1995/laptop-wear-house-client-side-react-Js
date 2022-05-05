import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then((response) => response.json())
            .then((data) => setReviews(data));
    }, []);
    return (

        <div>
            <h2 className="text-center my-3  text-primary">Customer Review Here</h2>
            <div className="row">

                {
                    reviews.slice(0, 6).map(review => (<div className='col-4 col-sm-12 col-md-4 g-4  mx-auto ' key={review._id}>

                      
                            <Card className="border-0 shadow-lg  ">
                                <Card.Img className="w-50 mx-auto rounded-full" variant="top" src={review.img} />
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
    );
};

export default Review;