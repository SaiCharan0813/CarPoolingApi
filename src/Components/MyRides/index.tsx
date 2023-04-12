import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../Assets/logo.png'
import riderImage from '../Assets/charan.jpg'
import riderImage2 from '../Assets/Pic.jpeg'
import '../MyRides/style.css'
import { Container, Row, Col, Card } from "react-bootstrap";
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";

const MyRides: React.FC = () => {
    return (
        <Container fluid className='my-rides-container'>
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
                            <Col sm={4} className="matched-rides-card">
                                <div>
                                    <h4 className="book-ride-mathes white-color">Book Rides</h4>
                                </div>
                                <Row>
                                    <Row>

                                        <Card className="matched-card">


                                            <div>
                                                <h1 className="rider-name float-left">Clint Barton</h1>
                                                <span>
                                                    <img className="rider-image" src={riderImage} alt="profile" />
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
                                    </Row>
                                    <Row >

                                        <Card className="matched-card">


                                            <div>
                                                <h1 className="rider-name float-left">Clint Barton</h1>
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
                                    </Row>

                                </Row>

                            </Col>
                            <Col sm={4} className="matched-rides-card">
                                <div>
                                    <h4 className="offered-ride-mathes white-color">Offered Rides</h4>
                                </div>
                                <Row>
                                    <Row>

                                        <Card className="matched-card">


                                            <div>
                                                <h1 className="rider-name float-left">Clint Barton</h1>
                                                <span>
                                                    <img className="rider-image" src={riderImage} alt="profile" />
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
                                    </Row>
                                    <Row >

                                        <Card className="matched-card">
                                            <div>
                                                <h1 className="rider-name float-left">Clint Barton</h1>
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
                                    </Row>

                                </Row>

                            </Col>
                        </Row>
                    </Row>
                </div>
            </div >
        </Container >

    )
}
export default MyRides;