import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../Assets/logo.png'
import userImage from '../Assets/user.png'
import '../MyRides/style.css'
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import IUser from "../IUser/IUser";
import MatchedOfferRides from "../MatchedOfferRides";
import MatchedBookRides from "../MatchedBookRides";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";
// import { globalVariable } from '../global';

const MyRides: React.FC = () => {
    const navigate = useNavigate();
    var [image, setimage] = useState(userImage)
    var matchedRidesToBook: IUser[] = [];
    var [userName, setuserName] = useState<string>("newUser")
    const [allOfferRides, setallOfferRides] = useState(matchedRidesToBook)
    const [allBookRides, setallBookRides] = useState(matchedRidesToBook)
    const [openEmp, setopenEmp] = useState(false);
    const userData = JSON.parse(localStorage.getItem("userData")!)
    useEffect(() => {
        if(localStorage.getItem("userData")==null){
            navigate("/login")
        }
    });
    if(userData !=null && userData.userName !=''){
        userName = userData.userName;
    }
    
    if (userData !=null && userData.image != '') {
        image = userData.image;

    }
    const handleShow = () => setopenEmp(x => !x);

    const matchedOfferRide = async () => {
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + { globalVariable };
        // axios.defaults.headers.common['Content-Type'] = 'application/json';
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2ODU0NDI0NjYsImV4cCI6MTY4NTQ0MzA2NiwiaWF0IjoxNjg1NDQyNDY2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjcyNDMiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAifQ.w113hMTtUcVKK-ZuWtVtjdpsn_pWjz1RMliyHviA2SQ";
        // axios.defaults.headers.common['Content-Type'] = 'application/json';
        await axiosInstance.post('http://localhost:5290/GetMatchedOfferedRides',
            {
                "rideProviderId": localStorage.getItem("loginId"),
            }

        )

            .then((response) => {
                setallOfferRides(response.data)
                console.log("offer", response.data)
            });


    }
    const matchedBookRide = async () => {
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + { globalVariable };
        // axios.defaults.headers.common['Content-Type'] = 'application/json';
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2ODU0NDM1MDAsImV4cCI6MTY4NTQ0NDEwMCwiaWF0IjoxNjg1NDQzNTAwLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjcyNDMiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAifQ.jbO0g_foMXHeZW76o4WoNEO1f8BwcRMx6cugt6zel38.eyJuYmYiOjE2ODU0NDI0NjYsImV4cCI6MTY4NTQ0MzA2NiwiaWF0IjoxNjg1NDQyNDY2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjcyNDMiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAifQ.w113hMTtUcVKK-ZuWtVtjdpsn_pWjz1RMliyHviA2SQ";
        // axios.defaults.headers.common['Content-Type'] = 'application/json';
        await axiosInstance.post('http://localhost:5290/GetMatchedBookRides',
            {
                "customerId": localStorage.getItem("loginId"),
            }

        )

            .then((response) => {
                setallBookRides(response.data)
                console.log("book", response.data)
            });


    }
    function logOutUser() {
        localStorage.removeItem("userData")
    }

    return (
        <Container fluid className='my-rides-container'>

            <div className="book-ride-form">
                <div>
                    <Row>
                        <Row className='logo-bookride'>
                            <Col sm={1}>
                                <div>
                                    <img onClick={() => {

                                        navigate("/dashboard")
                                    }} className='logo-img-dashboard' src={logo} alt="logo" />
                                </div>
                            </Col>
                            <Col sm={11}>
                                <div>
                                    <h3 className="profile-name float-right">{userName}</h3>
                                    <img onClick={() => {
                                        handleShow()
                                    }} className="profile-image float-right" src={image} alt="profile" />
                                </div>
                                {openEmp && <div className="dropdown">
                                    <li><Link to={`/UserProfile`} className="user-profile">Profile</Link></li>


                                    <li onClick={() => {
                                        matchedOfferRide()
                                        matchedBookRide()
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
                            <Col sm={4} className="matched-rides-card">
                                <div>
                                    <h4 className="book-ride-mathes white-color">Book Rides</h4>
                                </div>
                                <Row>
                                    <Col>
                                        <div className="total-employees display-employees ">
                                            {allBookRides.map((rd: IUser, index: number) => {
                                                return (
                                                    <MatchedBookRides
                                                        key={index}
                                                        rideId={rd.rideId}
                                                        rideProviderId={rd.rideProviderId}

                                                        sourceId={rd.sourceId}


                                                        destinationId={rd.destinationId}

                                                        date={rd.date}

                                                        fair={rd.fair}

                                                        totalSeats={rd.totalSeats}

                                                        availableSeats={rd.availableSeats}
                                                        seatsBooked={rd.seatsBooked}

                                                        time={rd.time}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={4} className="matched-rides-card">
                                <div>
                                    <h4 className="offered-ride-mathes white-color">Offered Rides</h4>
                                </div>
                                <Row>
                                    <div className="total-employees display-employees ">
                                        {allOfferRides.map((rd: IUser, index: number) => {
                                            return (
                                                <MatchedOfferRides
                                                    key={index}
                                                    rideId={rd.rideId}
                                                    rideProviderId={rd.rideProviderId}

                                                    sourceId={rd.sourceId}


                                                    destinationId={rd.destinationId}

                                                    date={rd.date}

                                                    fair={rd.fair}

                                                    totalSeats={rd.totalSeats}

                                                    availableSeats={rd.availableSeats}

                                                    time={rd.time}

                                                />
                                            );
                                        })}
                                    </div>

                                </Row>
                            </Col>

                        </Row>

                    </Row>


                </div >
            </div >
        </Container >

    )
}
export default MyRides;