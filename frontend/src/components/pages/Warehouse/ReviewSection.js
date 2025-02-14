import React from "react";
import { Container, Row, Col, Form, Button, ProgressBar, FloatingLabel } from 'react-bootstrap';
// import RatingBar from "./RattingBar";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";
import "./progressReviewBar.css";
import { useState } from "react";
import ReviewForm from "./ReviewForm";
import { BsPencilSquare } from "react-icons/bs";


const ReviewSection = () =>
{
    const [showForm, setShowForm] = useState(false)
    const reviewDate = new Date();
    const reviewerName = "Smit Sharma";
    const ratingTotal = "3.5";
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const bookedDuration = "10 months"
    const reviewDescription = "Great storage facility, with drive up, off-street parking for load/unload. Clean, safe, with lots of security checks & balances in place. Most of the check-in and check-out processes are done online/smart phone by the customer, so if you're tech-challenged you might need some help.";
    const RatingBar = () =>
    {
        return (
            <Rating
                readonly="true"
                placeholderRating={ 3.5 }
                placeholderSymbol={ <BsStarFill className='text-warning' /> }
                fractions={ 2 } defaultValue={ 5 } emptySymbol={ <BsStar className='text-warning' /> } fullSymbol={ <BsStarFill className='text-warning' /> } />
        );
    }
    function switchForm(){
        setShowForm(prev=>!prev)
    }
    const reviewBar = () =>
    {
        return (
            <div className="jumbotron my-5 shadow p-3 mb-5 bg-white rounded">
               <div className="Customer-name">
                    <h4 className="text-primary">{ reviewerName }</h4>
                    <h6><RatingBar /> &nbsp; { ratingTotal }</h6>
               </div>
               <div className="review-duration">
                    <h5 className="review-date">{ reviewDate.toLocaleDateString(undefined, options) }</h5>
                    <h7>Booked for {bookedDuration}</h7>
               </div>
               <hr></hr>
               <div>
                    <p>
                        { reviewDescription }
                    </p>
               </div>
            </div>
        );
    }

    const Comments = ()=>
    {
        return (
                <Col lg={ 8 } md={ 8 } sm={ 12 } xs={ 12 }>
                            <Form.Label>Sort By:</Form.Label>
                            <Form.Select size="sm">
                                <option>Top Reviews</option>
                                <option>Most Recent</option>
                            </Form.Select>
                            {reviewBar()}
                            {reviewBar()}
                            <Button style={{margin: "auto"}} varient="primary">See all reviews</Button>
                            
                        </Col>
        )
    }



    const now = 60;
    return (
        <>
            <Container fluid>
                <Form>
                    <Row>
                        <Col lg={ 4 } className="my-3">
                            <h3>Customer reviews</h3>
                            <h6><RatingBar /> &nbsp; { ratingTotal } out of 5</h6>
                            <Row>
                                <Col className="text-center float-left" md={ 3 } sm={ 3 } xs={ 3 }><h6>5 Star</h6></Col>
                                <Col><ProgressBar now={ now } label={ `${ now }%` } className=" progressReviewBar" variant="warning" /></Col>
                            </Row>
                            <Row>
                                <Col className="text-center float-left" md={ 3 } sm={ 3 } xs={ 3 }><h6>4 Star</h6></Col>
                                <Col><ProgressBar now={ now } label={ `${ now }%` } className=" progressReviewBar" variant="warning" /></Col>
                            </Row>
                            <Row>
                                <Col className="text-center float-left" md={ 3 } sm={ 3 } xs={ 3 }><h6>3 Star</h6></Col>
                                <Col className="text-dark"><ProgressBar now={ now } label={ `${ now }%` } className=" progressReviewBar" variant="warning" /></Col>
                            </Row>
                            <Row>
                                <Col className="text-center float-left" md={ 3 } sm={ 3 } xs={ 3 }><h6>2 Star</h6></Col>
                                <Col><ProgressBar now={ now } label={ `${ now }%` } className=" progressReviewBar" variant="warning" /></Col>
                            </Row>
                            <Row>
                                <Col className="text-center float-left" md={ 3 } sm={ 3 } xs={ 3 }><h6>1 Star</h6></Col>
                                <Col><ProgressBar now={ now } label={ `${ now }%` } className=" progressReviewBar" variant="warning" /></Col>
                            </Row>
                            <hr />
                            <h3 className="my-4">By feature</h3>
                            <Row>
                                <Col className="text-center my-auto float-left" md={ 6 } sm={ 6 } xs={ 6 }><h6>Value for money</h6></Col>
                                <Col><h6> <RatingBar className="float-right" /> &nbsp; { ratingTotal }</h6></Col>
                            </Row>
                            <Row>
                                <Col className="text-center my-auto float-left" md={ 6 } sm={ 6 } xs={ 6 }><h6>Large Space</h6></Col>
                                <Col><h6> <RatingBar className="float-right" /> &nbsp; { ratingTotal }</h6></Col>
                            </Row>
                            <Row>
                                <Col className="text-center my-auto float-left" md={ 6 } sm={ 6 } xs={ 6 }><h6>For small business</h6></Col>
                                <Col><h6> <RatingBar className="float-right" /> &nbsp; { ratingTotal }</h6></Col>
                            </Row>
                            <hr />
                            <div className="container" style={{height: "100px"}}>
                                {(!showForm) && <Button onClick={switchForm} type="button" varient="primary" style={{margin: "auto"}}><BsPencilSquare/>&nbsp; Write a Review</Button>}
                            </div>
                        </Col>

                        {showForm ? <ReviewForm switchForm={switchForm} /> : <Comments/>}
                    </Row>
                </Form>
            </Container>
        </>
    );
}
export default ReviewSection;
