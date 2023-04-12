import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../DashBoard/style.css'
import logo from '../Assets/logo.png'
import { Container, Row, Col } from "react-bootstrap";
const DashBoard: React.FC = () => {
    return (
        <Container fluid className='dash-board-container'>
            <Row className="logo-row">
                <Col sm={1}>
                    <div className='logo-dashboard'>
                        <img className='logo-img-dashboard' src={logo} alt="logo" />
                    </div>
                </Col>

            </Row>
            <Row>

                <div className="user">
                    <h1><b>Hey John!</b></h1>
                </div>


            </Row>
            <div className="dash-board">
                <div className='options-to-user'>
                    <Row>
                        <Col sm={6} className="book-ride">


                            <Row>
                                <div className="book-a-ride">
                                    <a id="bookRide">Book a ride</a>
                                </div>
                            </Row>


                        </Col>
                        <Col sm={6} className="offer-ride">
                            <a id="offerRide">Offer a ride</a>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>

    )
}
export default DashBoard;