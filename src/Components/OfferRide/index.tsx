import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../Assets/logo.png'
import '../OfferRide/style.css'
import { Container, Row, Col, Card } from "react-bootstrap";
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";

const OfferRide: React.FC = () => {
    return (
        <Container fluid className='offer-ride-container'>
            <div className="offer-ride-form">
                <div>
                    <Row>
                        <Row className='logo-offerride'>
                            <Col sm={1}>
                                <div>
                                    <img className='logo-img-dashboard' src={logo} alt="logo" />
                                </div>
                            </Col>

                        </Row>
                        <Row>
                            <Col sm={4} className="offer-ride-card-column">

                                <Card>
                                    <div className="title float-left">
                                        <span >
                                            <h1 className="title float-left">Offer a Ride</h1>
                                        </span>
                                        <span>
                                            <label className="switch">
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
                                                <form className="form-for-offering">
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
                                                    <h5 className="next purple-color">Next&gt;&gt;</h5>
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
                            <Col sm={4} className="offer-ride-card-column">

                                <Card>
                                    <div className="title">
                                        <span >
                                            <h1 className="title">Offer a Ride</h1>
                                        </span>
                                        <span>
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                        </span>
                                    </div>
                                    {/* <h1>Book a Ride</h1>
                                        <span></span> */}
                                    <div>
                                        <p className="title-text">we get you the matches asap !</p>
                                    </div>


                                    <Row>
                                        <Col sm={11} >

                                            <div>
                                                <form className="form-for-offering">
                                                    <div className="form-group">
                                                        <label className="from-label form-lables float-left">Stop 1</label>
                                                        <input className="form-control no-border" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="to-label form-lables float-left">Stop 2</label>
                                                        <input className="form-control no-border" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="date-label form-lables float-left">Stop 3</label>
                                                        <input className="form-control no-border" />
                                                    </div>
                                                    <div className="form-group">
                                                        <Row>
                                                            <Col sm={7}>
                                                                <label className="available-seats-label form-lables float-left">Available Seats</label>
                                                            </Col>
                                                            <Col sm={5}>
                                                                <label className="price-for-ride-label form-lables float-left">Price</label>
                                                                <input className="form-control no-border-for-price" placeholder=""/>
                                                            </Col>

                                                        </Row>
                                                        <Row>
                                                            <div>
                                                                <button type="submit" className="seat-slot-btn btn-default black-color" id="seat-slots-btn">1</button>

                                                                <button type="submit" className="seat-slot-btn btn-default black-color" id="seat-slots-btn">2</button>

                                                                <button type="submit" className="seat-slot-btn btn-default black-color" id="seat-slots-btn">3</button>


                                                            </div>
                                                        </Row>


                                                    </div>
                                                    <button type="submit" className="btn btn-default">Submit</button>
                                                </form>
                                            </div>

                                        </Col>
                                        <Col sm={1}>
                                            <div className=" leftcard">

                                                <li className="startingPoint"></li>

                                                <li></li>

                                                <li></li>

                                                <li></li>

                                                <li className="destinationPoint"><i className='fas fa-map-marker-alt i'></i></li>

                                                <li id="add"><i className='fas fa-plus i'></i></li>

                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>

                        </Row>
                    </Row>
                </div>
            </div >
        </Container >

    )
}
export default OfferRide;