import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../Assets/logo.png'
import '../OfferRide/style.css'
import userImage from '../Assets/user.png'
import { Container, Row, Col, Card } from "react-bootstrap";
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import dateFormat from 'dateformat';
import { format } from 'date-fns';
import { Link, useNavigate } from "react-router-dom";

const OfferRide: React.FC = () => {
    const navigate = useNavigate();
    var [image,setimage] = useState(userImage)
    const [userFromCity, setuserFromCity] = useState<string>("Select");
    const [fromCities, setfromCities] = useState([]);
    const [userToCity, setuserToCity] = useState<string>("Select");
    const [toCities, settoCities] = useState([]);
    const [time, settime] = useState<string>("");
    var [userFromDate, setuserFromDate] = useState<string>("");
    var [userToDate, setuserToDate] = useState<string>("");
    const [userStop1, setuserStop1] = useState<string>("");
    const [userStop2, setuserstop2] = useState<string>("");
    const [userStop3, setuserStop3] = useState<string>("");
    const [fairForRide, setfairForRide] = useState<number>(0);
    var [userName, setuserName] = useState<string>("newUser")
    var [errorMessage,seterrorMessage] = useState<string>("");
    const [seats, setseats] = useState(0);
    const userData = JSON.parse(localStorage.getItem("userData")!)
    userName = userData.userName;
    const userEmail = userData.emailId;
    const [openEmp, setopenEmp] = useState(false);
    if (userData.image != '') {
        image = userData.image;

    }
    const handleShow = () => setopenEmp(x => !x);
    useEffect(() => {
        const getCities = async () => {
            await axios.get('https://localhost:7243/api/OfferRide/api/OfferRide/TotalCities')
                .then((response) => {
                    setfromCities(response.data)
                    settoCities(response.data)
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
        for (var k = 0; k < (fromCities).length; k++) {
            str.push(<option value={fromCities[k]}>{fromCities[k]}</option>)
        }
        return str;
    }
    function displayToCities() {
        var str = [];
        for (var k = 0; k < (toCities).length; k++) {
            str.push(<option value={toCities[k]}>{toCities[k]}</option>)
        }
        return str;
    }
    // function openNextCard() {
    //     userFromCity
    // }
    function handleTimeRequest(e: any, time: any) {
        e.preventDefault();
        settime(time);

    };
    function handleSeats(e: any, seats: any) {
        e.preventDefault();
        setseats(seats);
    }
    function gettingDate(event: any) {
        setuserFromDate(event.target.value)
        setuserToDate(event.target.value)
    }
    function nextClick(e: any) {
        e.preventDefault();
        var fromTime = time.split("-")[0];
        var toTime = time.split("-")[1];
        if (toTime.endsWith("pm")) {
            toTime = toTime.slice(0, -2);
            if (toTime != '12') {
                var intTime = 12 + parseInt(toTime);
                toTime = intTime.toString();
            }
        }
        else {
            toTime = toTime.slice(0, -2);
        }
        if (fromTime.endsWith("pm")) {
            fromTime = fromTime.slice(0, -2);
            if (fromTime != '12') {
                var intTime = 12 + parseInt(fromTime);
                fromTime = intTime.toString();
            }

        }
        else {
            fromTime = fromTime.slice(0, -2);
        }
        var tempDate = userFromDate;
        var tempFromDate = tempDate.split("-");
        setuserFromDate(format(new Date(parseInt(tempFromDate[0]), parseInt(tempFromDate[1]) - 1, parseInt(tempFromDate[2]), parseInt(fromTime)), "yyyy-MM-dd hh:mm:ss").replace(" ", "T"));

        var tempToDate = tempDate.split("-");
        setuserToDate(format(new Date(parseInt(tempToDate[0]), parseInt(tempToDate[1]) - 1, parseInt(tempToDate[2]), parseInt(toTime)), "yyyy-MM-dd hh:mm:ss").replace(" ", "T"));
        console.log(userToDate, "ss");
        e.preventDefault();
        // setuserFromDate(originalFromDate)
    }

    const addOfferRideBackend = async () => {
        if(userFromCity != userToCity){
            await axios.post('https://localhost:7243/api/OfferRide/OfferingRide',
            {
                "sourceId": fromCities.findIndex((x) => x == userFromCity),
                "destinationId": toCities.findIndex((x) => x == userToCity),
                "fromDate": userFromDate,
                "toDate": userToDate,
                "rideProviderId": localStorage.getItem("loginId"),
                "fair": fairForRide,
                "availableSeats": seats,
                "seatsBooked": 0,
                "stopNames": [userStop1, userStop2, userStop3]

            }

        )
            .then(e => console.log(e))
            .catch(error => console.log(error))
        }
        else{
            window.alert("we can't offer a ride to the same city")
        }
       
    }
    function logOutUser() {
        localStorage.removeItem("userData")
    }

    return (
        <Container fluid className='offer-ride-container'>
            <div className="offer-ride-form">
                <div>
                    <Row>
                        <Row className='logo-offerride'>
                            <Col sm={1}>
                                <div>
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
                            <Col sm={4} lg={6} xl={4} className="offer-ride-card-column">

                                <Card className="offering-ride-card">
                                    <div className="title float-left">
                                        <span >
                                            <h1 className="title float-left">Offer a Ride</h1>
                                        </span>
                                        <span>
                                            <label className="switch">
                                                <input onClick={() => {
                                        
                                        navigate("/bookride")

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
                                                <form className="form-for-offering">
                                                    <div className="form-group">
                                                        <label className="from-label form-lables float-left">From</label>
                                                        <select name="employeeDepartment" className="form-field-value" value={userFromCity}
                                                            onChange={(event) => setuserFromCity(event.target.value)}>
                                                            <option className="dropdown-options" value="Select">Select</option>
                                                            {displayFromCities()}
                                                        </select>

                                                    </div>
                                                    <div className="form-group">
                                                        <label className="to-label form-lables float-left">To</label>
                                                        <select name="employeeDepartment" className="form-field-value" value={userToCity}
                                                            onChange={(event) => setuserToCity(event.target.value)}>
                                                            <option className="dropdown-options" value="Select">Select</option>
                                                            {displayToCities()}
                                                        </select>

                                                    </div>
                                                    <div className="form-group">
                                                        <label className="date-label form-lables float-left">Date</label>
                                                        <input type="date" min={new Date().toISOString().split('T')[0]} name="Date" className="form-control no-border" value={userFromDate}
                                                            onChange={(event) => { gettingDate(event) }} />

                                                    </div>
                                                    <div className="form-group">
                                                        <Row>
                                                            <label className="time-label form-lables float-left">Time</label>
                                                        </Row>
                                                        <Row>
                                                            <div>
                                                                <button value={time} onClick={(event) => { handleTimeRequest(event, "5am-9am") }} className="time-slot-btn btn-default black-color time-slots-btns">5am-9am</button>


                                                                <button value={time} onClick={(event) => { handleTimeRequest(event, "9am-12pm") }} className="time-slot-btn btn-default black-color time-slots-btns">9am-12pm</button>

                                                                <button value={time} onClick={(event) => { handleTimeRequest(event, "12pm-3pm") }} className="time-slot-btn btn-default black-color time-slots-btns">12pm-3pm</button>


                                                            </div>
                                                        </Row>
                                                        <Row>
                                                            <div>
                                                                <button value={time} onClick={(event) => { handleTimeRequest(event, "3pm-6pm") }} className="time-slots-btn btn-default black-color time-slots-btns">3pm-6pm</button>

                                                                <button value={time} onClick={(event) => { handleTimeRequest(event, "6pm-9pm") }} className="time-slots-btn btn-default black-color time-slots-btns">6pm-9pm</button>

                                                            </div>
                                                        </Row>


                                                    </div>
                                                    <button onClick={(event) => { nextClick(event) }} className="next purple-color">Next&gt;&gt;</button>
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
                            <Col sm={4} lg={6} xl={4} className="offer-ride-card-column">

                                <Card>
                                    <div className="title">
                                        <span >
                                            <h1 className="title">Offer a Ride</h1>
                                        </span>
                                        <span>
                                            <label className="switch">
                                                <input onClick={() => {
                                        
                                        navigate("/bookride")

                                    }} type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                        </span>
                                    </div>

                                    <div>
                                        <p className="title-text">we get you the matches asap !</p>
                                    </div>


                                    <Row>
                                        <Col sm={11} >

                                            <div>
                                                <form className="form-for-offering">
                                                    <div className="form-group">
                                                        <label className="from-label form-lables float-left">Stop 1</label>
                                                        <input type="text" name="stop1" className="form-control no-border" value={userStop1}
                                                            onChange={(event) => { setuserStop1(event.target.value); }} />
                                                        {/* <input className="form-control no-border" /> */}
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="to-label form-lables float-left">Stop 2</label>
                                                        <input type="text" name="stop2" className="form-control no-border" value={userStop2}
                                                            onChange={(event) => { setuserstop2(event.target.value); }} />
                                                        {/* <input className="form-control no-border" /> */}
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="date-label form-lables float-left">Stop 3</label>
                                                        <input type="text" name="stop3" className="form-control no-border" value={userStop3}
                                                            onChange={(event) => { setuserStop3(event.target.value); }} />
                                                        {/* <input className="form-control no-border" /> */}
                                                    </div>
                                                    <div className="form-group">
                                                        <Row>
                                                            <Col sm={7}>
                                                                <label className="available-seats-label form-lables float-left">Available Seats</label>
                                                            </Col>
                                                            <Col sm={5}>
                                                                <label className="price-for-ride-label form-lables float-left">Price</label>
                                                                <input type="text" name="fair" className="form-control border-for-price" value={fairForRide}
                                                                    onChange={(event) => { setfairForRide(parseInt(event.target.value)); }} />
                                                                {/* <input className="form-control no-border-for-price" placeholder="" /> */}
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <div>
                                                                <button value={seats} onClick={(event) => { handleSeats(event, 1) }} className="seat-slot-btn btn-default black-color seat-slots-btns">1</button>
                                                                <button value={seats} onClick={(event) => { handleSeats(event, 2) }} className="seat-slot-btn btn-default black-color seat-slots-btns">2</button>
                                                                <button value={seats} onClick={(event) => { handleSeats(event, 3) }} className="seat-slot-btn btn-default black-color seat-slots-btns">3</button>

                                                            </div>
                                                        </Row>


                                                    </div>
                                                    <input
                                                        type="button"
                                                        className="btn btn-default"

                                                        onClick={() => {

                                                            addOfferRideBackend()
                                                        }}
                                                        value="Submit"
                                                    />
                                                    {/* <p>{userFromDate},,,{userToDate}</p> */}
                                                    {/* <button type="submit" onClick={addOfferRideBackend()} className="btn btn-default">Submit</button> */}
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