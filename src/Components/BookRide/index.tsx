import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../Assets/logo.png'
import userImage from '../Assets/user.png'
import '../BookRide/style.css'
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";
import IUser from "../IUser/IUser";
import axios from "axios";
import { format } from "date-fns";
import UserCard from "../UserCard";
import { Link, useNavigate } from "react-router-dom";
import MatchedBookRides from "../MatchedBookRides";
import MyRides from "../MyRides";

import axiosInstance from "../axiosInstance";

const BookRide: React.FC = () => {

    const navigate = useNavigate();
    var [image, setimage] = useState(userImage)
    const [userBookingFromCity, setuserBookingFromCity] = useState<string>("Select");
    const [fromBookingCities, setfromBookingCities] = useState([]);
    const [userBookingToCity, setuserBookingToCity] = useState<string>("Select");
    const [toBookingCities, settoBookingCities] = useState([])
    const [styleButton1, setStyleButton1] = useState<any>({ backgroundColor: "white" })
    const [styleButton2, setStyleButton2] = useState<any>({ backgroundColor: "white" })
    const [styleButton3, setStyleButton3] = useState<any>({ backgroundColor: "white" })
    const [styleButton4, setStyleButton4] = useState<any>({ backgroundColor: "white" })
    const [styleButton5, setStyleButton5] = useState<any>({ backgroundColor: "white" })
    const [styleButton6, setStyleButton6] = useState<any>({ backgroundColor: "white" })
    const [styleButton7, setStyleButton7] = useState<any>({ backgroundColor: "white" })
    const [styleButton8, setStyleButton8] = useState<any>({ backgroundColor: "white" })
    const [bookingTime, setbookingTime] = useState<string>("");
    var [userBookingFromDate, setuserBookingFromDate] = useState<string>("");
    var [userBookingToDate, setuserBookingToDate] = useState<string>("");
    var [userName, setuserName] = useState<string>("newUser")
    const [seatsBooked, setseatsBooked] = useState(0);
    var matchedRidesToBook: IUser[] = [];
    const [allOfferedRides, setallOfferedRides] = useState(matchedRidesToBook)
    const userData = JSON.parse(localStorage.getItem("userData")!)
    useEffect(() => {
        if(localStorage.getItem("userData")==null){
            navigate("/login")
        }
    });
    if(userData !=null && userData.userName !=''){
        userName = userData.userName;
    }
    else{
        userName="newUser"
    }

    const [openEmp, setopenEmp] = useState(false);
    if (userData !=null && userData.image != '') {
        image = userData.image;

    }
    const handleShow = () => setopenEmp(x => !x);

    useEffect(() => {
        const getCities = async () => {
            // axios.defaults.headers.common['Authorization'] = 'Bearer ' + { globalVariable };
            // axios.defaults.headers.common['Content-Type'] = 'application/json';
            await axiosInstance.get('http://localhost:5290/api/OfferRide/api/OfferRide/TotalCities')
                .then((response) => {
                    setfromBookingCities(response.data)
                    settoBookingCities(response.data)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        getCities();

    }, [])
    /*function to get all the cities*/
    function displayFromCities() {
        var str = [];
        for (var k = 0; k < (fromBookingCities).length; k++) {
            str.push(<option value={fromBookingCities[k]}>{fromBookingCities[k]}</option>)
        }
        return str;
    }
    function displayToCities() {
        var str = [];
        for (var k = 0; k < (toBookingCities).length; k++) {
            str.push(<option value={toBookingCities[k]}>{toBookingCities[k]}</option>)
        }
        return str;
    }
    function testDate(event: any) {
        setuserBookingFromDate(event.target.value)
        setuserBookingToDate(event.target.value)
    }
    function handleBookingTimeSlots(e: any, time: any) {
        e.preventDefault();
        if (time == "5am-9am") {
            setStyleButton1({
                backgroundColor: "purple"
            })

        }
        if (time == "9am-12pm") {
            setStyleButton2({
                backgroundColor: "purple"
            })

        }
        if (time == "12pm-3pm") {
            setStyleButton3({
                backgroundColor: "purple"
            })

        }
        if (time == "3pm-6pm") {
            setStyleButton4({
                backgroundColor: "purple"
            })

        }
        if (time == "6pm-9pm") {
            setStyleButton5({
                backgroundColor: "purple"
            })

        }
        setbookingTime(time);

    };
    function handleSeats(e: any, seats: any) {
        e.preventDefault();
        if (seats == "1") {
            setStyleButton6({
                backgroundColor: "purple"
            })

        }
        if (seats == "2") {
            setStyleButton7({
                backgroundColor: "purple"
            })

        }
        if (seats == "3") {
            setStyleButton8({
                backgroundColor: "purple"
            })

        }
        setseatsBooked(seats);
    }
    function matchedRide(e: any) {
        // e.preventDefault();
        var fromBookingTime = bookingTime.split("-")[0];
        var toBookingTime = bookingTime.split("-")[1];
        if (toBookingTime.endsWith("pm")) {
            toBookingTime = toBookingTime.slice(0, -2);
            if (toBookingTime != '12') {
                var intTime = 12 + parseInt(toBookingTime);
                toBookingTime = intTime.toString();
            }
        }
        else {
            toBookingTime = toBookingTime.slice(0, -2);
        }
        if (fromBookingTime.endsWith("pm")) {
            fromBookingTime = fromBookingTime.slice(0, -2);
            if (fromBookingTime != '12') {
                var intTime = 12 + parseInt(fromBookingTime);
                fromBookingTime = intTime.toString();
            }

        }
        else {
            fromBookingTime = fromBookingTime.slice(0, -2);
        }

        var tempBookingFromDate = userBookingFromDate.split("-");
        setuserBookingFromDate(format(new Date(parseInt(tempBookingFromDate[0]), parseInt(tempBookingFromDate[1]) - 1, parseInt(tempBookingFromDate[2]), parseInt(fromBookingTime)), "yyyy-MM-dd hh:mm:ss").replace(" ", "T"));
        var tempBookingToDate = userBookingFromDate.split("-");
        setuserBookingToDate(format(new Date(parseInt(tempBookingToDate[0]), parseInt(tempBookingToDate[1]) - 1, parseInt(tempBookingToDate[2]), parseInt(toBookingTime)), "yyyy-MM-dd hh:mm:ss").replace(" ", "T"));

        console.log(userBookingToDate, "charan");
        console.log(userBookingFromDate);
        e.preventDefault();
    }
    const addBookRideBackend = async () => {
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + { globalVariable };
        // axios.defaults.headers.common['Content-Type'] = 'application/json';
        await axios.post('http://localhost:5290/api/OfferRide/api/OfferRide/MatchedRide',
            {
                "sourceId": fromBookingCities.findIndex((x) => x == userBookingFromCity),
                "rideProviderId":userData.loginId,
                "destinationId": toBookingCities.findIndex((x) => x == userBookingToCity),
                "fromDate": userBookingFromDate,
                "toDate": userBookingToDate,
                "seatsBooked": seatsBooked,
            }

        )

            .then((response) => {
                setallOfferedRides(response.data)
                if (response.data == "") {
                    window.alert("No matches found")
                }
            });
        console.log("mm", allOfferedRides)

    }
    function logOutUser() {
        localStorage.removeItem("userData")
    }


    return (

        <Container fluid className='book-ride-container'>
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
                            <Col sm={11} >
                                <h3 className="profile-name float-right">{userName}</h3>
                                <img onClick={() => {
                                    handleShow()
                                }} className="profile-image float-right" src={image} alt="profile" />

                                {openEmp && <div className="dropdown">
                                    <li><Link to={`/UserProfile`} className="user-profile">Profile</Link></li>


                                    <li onClick={() => {
                                         navigate("/myrides")
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
                            <Col sm={4} lg={6} xl={5} className="book-ride-card-column">

                                <Card className="booking-card">
                                    <div className="title float-left">
                                        <span >
                                            <h1 className="title float-left">Book a Ride</h1>

                                        </span>
                                        <span>
                                            <label className="switch float-right">
                                                <input onClick={() => {

                                                    navigate("/offerride")

                                                }} type="checkbox" />
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
                                                        <select name="employeeDepartment" className="form-field-value" value={userBookingFromCity}
                                                            onChange={(event) => setuserBookingFromCity(event.target.value)}>
                                                            <option className="dropdown-options" value="Select">Select</option>
                                                            {displayFromCities()}
                                                        </select>

                                                    </div>
                                                    <div className="form-group">
                                                        <label className="to-label form-lables float-left">To</label>
                                                        <select name="employeeDepartment" className="form-field-value" value={userBookingToCity}
                                                            onChange={(event) => setuserBookingToCity(event.target.value)}>
                                                            <option className="dropdown-options" value="Select">Select</option>
                                                            {displayToCities()}
                                                        </select>

                                                    </div>
                                                    <div className="form-group">

                                                        <label className="date-label form-lables float-left">Date</label>
                                                        <input type="date" min={new Date().toISOString().split('T')[0]} name="Date" className="form-control no-border" value={userBookingFromDate}
                                                            onChange={(event) => { testDate(event) }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <Row>
                                                            <label className="time-label-bookride form-lables float-left">Time</label>
                                                        </Row>
                                                        <Row>
                                                            <div>
                                                                <button value={bookingTime} style={styleButton1} onClick={(event) => { handleBookingTimeSlots(event, "5am-9am") }} className="time-slot-btn btn-default black-color time-slots-btns">5am-9am</button>

                                                                <button value={bookingTime} style={styleButton2} onClick={(event) => { handleBookingTimeSlots(event, "9am-12pm") }} className="time-slot-btn btn-default black-color time-slots-btns">9am-12pm</button>

                                                                <button value={bookingTime} style={styleButton3} onClick={(event) => { handleBookingTimeSlots(event, "12pm-3pm") }} className="time-slot-btn btn-default black-color time-slots-btns">12pm-3pm</button>


                                                            </div>
                                                        </Row>

                                                        <Row>
                                                            <div>

                                                                <button value={bookingTime} style={styleButton4} onClick={(event) => { handleBookingTimeSlots(event, "3pm-6pm") }} className="time-slots-btn btn-default black-color time-slots-btns">3pm-6pm</button>

                                                                <button value={bookingTime} style={styleButton5} onClick={(event) => { handleBookingTimeSlots(event, "6pm-9pm") }} className="time-slots-btn btn-default black-color time-slots-btns">6pm-9pm</button>


                                                            </div>
                                                        </Row>
                                                        <Col sm={7}>
                                                            <label className="available-seats-label form-lables float-left">Book Seats</label>
                                                        </Col>
                                                        <Row>
                                                            <div>
                                                                <button value={seatsBooked} style={styleButton6} onClick={(event) => { handleSeats(event, 1) }} className="seat-booked-slot-btn btn-default black-color seat-slots-btns">1</button>
                                                                <button value={seatsBooked} style={styleButton7} onClick={(event) => { handleSeats(event, 2) }} className="seat-booked-slot-btn btn-default black-color seat-slots-btns">2</button>
                                                                <button value={seatsBooked} style={styleButton8} onClick={(event) => { handleSeats(event, 3) }} className="seat-booked-slot-btn btn-default black-color seat-slots-btns">3</button>

                                                            </div>
                                                        </Row>


                                                    </div>
                                                    <button
                                                        onClick={(event) => {
                                                            matchedRide(event);

                                                        }}>Set Time By click</button>
                                                    <input
                                                        type="button"
                                                        className="btn-bookride-submit btn-default"

                                                        onClick={() => {

                                                            addBookRideBackend();
                                                        }}
                                                        value="Submit"
                                                    />

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
                            <Col sm={7} lg={6} className="matched-rides-card">
                                <div>
                                    <h1 className="ride-matches purple-color">Your Matches</h1>
                                </div>
                                <Row>
                                    <div className="total-employees display-employees ">
                                        {allOfferedRides.map((rd: IUser, index: number) => {
                                            return (
                                                <UserCard
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

                                                    seatsBooked={seatsBooked}

                                                    userName={rd.userName}
                                                    image={rd.image}

                                                />
                                            );
                                        })}
                                    </div>
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