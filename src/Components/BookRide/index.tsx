import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../Assets/logo.png'
import riderImage from '../Assets/charan.jpg'
import riderImage2 from '../Assets/Pic.jpeg'
import '../BookRide/style.css'
import { Container, Row, Col, Card } from "react-bootstrap";
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";

const BookRide: React.FC = () => {
    return (
        <Container fluid className='book-ride-container'>
            <div className="book-ride-form">
                <div>
                    <Row>
                        <Row className='logo-bookride'>
                            <Col sm={1}>
                                <div>
                                    <img className='logo-img-dashboard' src={logo} alt="logo" />
                                </div>
                            </Col>

                        </Row>
                        <Row>
                            <Col sm={4} className="book-ride-card-column">

                                <Card>
                                    <div className="title float-left">
                                        <span >
                                           <h1 className="title float-left">Book a Ride</h1> 
                                        </span>
                                        <span>
                                            <label className="switch float-right">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                        </span>
                                    </div>
                                    <div>
                                        <p className="title-text float-left">we get you the matches asap !</p>
                                    </div>
                                    <Row>
                                        <Col sm={11} >
                                            <div>
                                                <form className="form-for-booking">
                                                    <div className="form-group">
                                                        <label className="from-label form-lables float-left">From</label>
                                                        <input className="form-control no-border" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="to-label form-lables float-left">To</label>
                                                        <input className="form-control no-border" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="date-label form-lables float-left">Date</label>
                                                        <input className="form-control no-border" />
                                                    </div>
                                                    <div className="form-group">
                                                        <Row>
                                                            <label className="time-label form-lables float-left">Time</label>
                                                        </Row>
                                                        <Row>
                                                            <div>
                                                                <button type="submit" className="time-slot-btn btn-default black-color" id="time-slots-btn">5am-9am</button>

                                                                <button type="submit" className="time-slot-btn btn-default black-color" id="time-slots-btn">9am-12pm</button>

                                                                <button type="submit" className="time-slot-btn btn-default black-color" id="time-slots-btn">12pm-3pm</button>
                                                              

                                                            </div>
                                                        </Row>
                                                        <Row>
                                                            <div>
                                                                <button type="submit" className="time-slots-btn btn-default black-color" id="time-slots-btn">3pm-6pm</button>

                                                                <button type="submit" className="time-slots-btn btn-default black-color" id="time-slots-btn">6pm-9pm</button>

                                                            </div>
                                                        </Row>


                                                    </div>
                                                    <button type="submit" className="btn btn-default">Submit</button>
                                                </form>
                                            </div>

                                        </Col>
                                        <Col sm={1}>
                                            <div className=" leftcard">

                                                <li className="startingPoint purple-color"></li>

                                                <li></li>

                                                <li></li>

                                                <li></li>

                                                <li className="destinationPoint"><i className='fas fa-map-marker-alt i purple-color'></i></li>

                                                <li id="add"><i className='fas fa-plus i'></i></li>

                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col sm={7} className="matched-rides-card">
                                <div>
                                    <h1 className="ride-mathes purple-color">Your Matches</h1>
                                </div>
                                <Row>
                                    <Col sm={6}>

                                        <Card className="mathed-card">


                                            <div>
                                                <h1 className="rider-name float-left">Clint Barton</h1>
                                                <span>
                                                    <img className="rider-image float-right" src={riderImage} alt="profile" />
                                                </span>
                                            </div>
                                            <Row>
                                                <Col sm={4}>
                                                    <p className="from-location labels-of-card float-left">From</p>
                                                </Col>
                                                <Col sm={3}>
                                                    <p></p>
                                                </Col>
                                                <Col sm={5}>
                                                    <p className="to-location labels-of-card float-left">To</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={4}>
                                                    <p className="from-address values-of-card float-left">cincinnati</p>
                                                </Col>
                                                <Col sm={3}>
                                                    <p></p>
                                                </Col>
                                                <Col sm={5}>
                                                    <p className="to-address values-of-card float-left">Minneapolis</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={4}>
                                                    <p className="date labels-of-card float-left">Date</p>
                                                </Col>
                                                <Col sm={3}>
                                                    <p></p>
                                                </Col>
                                                <Col sm={5}>
                                                    <p className="time labels-of-card float-left">Time</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={4}>
                                                    <p className="date-of-ride values-of-card float-left">xx/mm/yyyy</p>
                                                </Col>
                                                <Col sm={3}>
                                                    <p></p>
                                                </Col>
                                                <Col sm={5}>
                                                    <p className="time-of-ride values-of-card float-left">5am-9am</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={4}>
                                                    <p className="price labels-of-card float-left">Price</p>
                                                </Col>
                                                <Col sm={3}>
                                                    <p></p>
                                                </Col>
                                                <Col sm={5}>
                                                    <p className="seat-availability labels-of-card float-left">Seat Availability</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={4}>
                                                    <p className="price-for-ride values-of-card float-left">180$</p>
                                                </Col>
                                                <Col sm={3}>
                                                    <p></p>
                                                </Col>
                                                <Col sm={5}>
                                                    <p className="seats-available-in-vehicle values-of-card float-left">02</p>
                                                </Col>
                                            </Row>


                                        </Card>
                                    </Col>
                                    <Col sm={6}>

                                        <Card className="mathed-card">


                                            <div>
                                                <h1 className="rider-name">Clint Barton</h1>
                                                <span>
                                                    <img className="rider-image" src={riderImage2} alt="profile" />
                                                </span>
                                            </div>
                                            <Row>
                                                <Col sm={4}>
                                                    <p className="from-location labels-of-card float-left">From</p>
                                                </Col>
                                                <Col sm={3}>
                                                    <p></p>
                                                </Col>
                                                <Col sm={5}>
                                                    <p className="to-location labels-of-card float-left">To</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={4}>
                                                    <p className="from-address values-of-card float-left">cincinnati</p>
                                                </Col>
                                                <Col sm={3}>
                                                    <p></p>
                                                </Col>
                                                <Col sm={5}>
                                                    <p className="to-address values-of-card float-left">Minneapolis</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={4}>
                                                    <p className="date labels-of-card float-left">Date</p>
                                                </Col>
                                                <Col sm={3}>
                                                    <p></p>
                                                </Col>
                                                <Col sm={5}>
                                                    <p className="time labels-of-card float-left">Time</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={4}>
                                                    <p className="date-of-ride values-of-card float-left">xx/mm/yyyy</p>
                                                </Col>
                                                <Col sm={3}>
                                                    <p></p>
                                                </Col>
                                                <Col sm={5}>
                                                    <p className="time-of-ride values-of-card float-left">5am-9am</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={4}>
                                                    <p className="price labels-of-card float-left">Price</p>
                                                </Col>
                                                <Col sm={3}>
                                                    <p></p>
                                                </Col>
                                                <Col sm={5}>
                                                    <p className="seat-availability labels-of-card float-left">Seat Availability</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={4}>
                                                    <p className="price-for-ride values-of-card float-left">180$</p>
                                                </Col>
                                                <Col sm={3}>
                                                    <p></p>
                                                </Col>
                                                <Col sm={5}>
                                                    <p className="seats-available-in-vehicle values-of-card float-left">02</p>
                                                </Col>
                                            </Row>


                                        </Card>
                                    </Col>

                                </Row>

                            </Col>
                        </Row>
                    </Row>
                </div>
            </div >
        </Container >

    )
}
export default BookRide;