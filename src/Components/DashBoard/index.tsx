import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../DashBoard/style.css'
import logo from '../Assets/logo.png'
import userImage from '../Assets/user.png'
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const DashBoard: React.FC = () => {
    const navigate = useNavigate();
    var [userName, setuserName] = useState<string>("newUser")
    var [image,setimage] = useState(userImage)
    const userData = JSON.parse(localStorage.getItem("userData")!)
    userName = userData.userName;
    const userEmail = userData.emailId;
    if (userData.image != '') {
        image = userData.image;

    }
    const [openEmp, setopenEmp] = useState(false);
    const handleShow = () => setopenEmp(x => !x);
    function logOutUser() {
        localStorage.removeItem("userData");
    }

    return (
        <Container fluid className='dash-board-container'>
            <Row className="logo-row">
                <Col sm={1}>
                    <div className='logo-dashboard'>
                        <img onClick={() => {

                            navigate("/login")
                        }} className='logo-img-dashboard' src={logo} alt="logo" />
                    </div>
                </Col>
                <Col sm={11}>
                    <h3 className="profile-name float-right">{userName}</h3>
                    <img onClick={() => {
                        handleShow()
                    }} className="profile-image float-right" src={image} alt="profile" />
                    {openEmp && <div className="dropdown">
                        <li><Link to={`/UserProfile`} className="user-profile">Profile</Link></li>


                        <li onClick={() => {
                        }}
                        >My Rides</li>

                        <li onClick={() => {
                            logOutUser()
                            navigate("/login")

                        }}>Logout</li>
                    </div>}
                </Col>

            </Row>
            <Row>

                <div className="user">
                    <h1><b>Hey {userName}</b></h1>
                </div>


            </Row>
            <div className="dash-board">
                <div className='options-to-user'>
                    <Row>
                        <Col sm={6} className="book-ride">


                            <Row>
                                <div className="book-a-ride">
                                    <Link to={`/bookride`} id="bookRide">Book a ride</Link>
                                </div>
                            </Row>
                        </Col>
                        <Col sm={6} className="offer-ride">
                            <Link to={`/offerride`} id="offerRide">Offer a ride</Link>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>

    )
}
export default DashBoard;