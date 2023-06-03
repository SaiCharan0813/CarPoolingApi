import { Card, Col, Row } from "react-bootstrap";
import '../UserCard/style.css';
import userImage from '../Assets/user.png'
import axios from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
// import { globalVariable } from '../global';

interface props {
    rideId: number;

    rideProviderId: string;

    sourceId: number;

    destinationId: number;

    date: string;

    fair: number;

    totalSeats: number;

    availableSeats: number;

    time: string;

    seatsBooked: number;
}


const MatchedBookRides: React.FC<props> = ({ rideId, rideProviderId, sourceId, destinationId, date, fair, totalSeats, availableSeats, time, seatsBooked }) => {
    const [fromCities, setfromCities] = useState([]);
    var [image, setimage] = useState(userImage)
    const userData = JSON.parse(localStorage.getItem("userData")!)
    const userName = userData.userName;
    const [toCities, settoCities] = useState([]);
    if (userData.image != '') {
        image = userData.image;

    }
    
    useEffect(() => {
        const getCitiesNames = async () => {
            // axios.defaults.headers.common['Authorization'] = 'Bearer ' + { globalVariable };
            // axios.defaults.headers.common['Content-Type'] = 'application/json';
            await axiosInstance.get('http://localhost:5290/api/OfferRide/api/OfferRide/TotalCities')
                .then((response) => {
                    setfromCities(response.data)
                    settoCities(response.data)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        getCitiesNames();

    }, [])
    return (

        <Row>
            <Col sm={12}>
                <Card className="mathed-card">
                    <div>
                        <h1 className="rider-name float-left">{userName}</h1>
                        <span>
                            <img className="rider-image float-right" src={image} alt="profile" />
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
                            <p className="from-address values-of-card float-left">{fromCities[sourceId]}</p>
                        </Col>
                        <Col sm={3}>
                            <p></p>
                        </Col>
                        <Col sm={5}>
                            <p className="to-address values-of-card float-left">{toCities[destinationId]}</p>
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
                            <p className="date-of-ride values-of-card float-left">{date}</p>
                        </Col>
                        <Col sm={3}>
                            <p></p>
                        </Col>
                        <Col sm={5}>
                            <p className="time-of-ride values-of-card float-left">{time}</p>
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
                            <p className="seat-availability labels-of-card float-left">Seats Booked</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <p className="price-for-ride values-of-card float-left">{fair}</p>
                        </Col>
                        <Col sm={3}>
                            <p></p>
                        </Col>
                        <Col sm={5}>
                            <p className="seats-available-in-vehicle values-of-card float-left">{seatsBooked}</p>
                        </Col>
                    </Row>


                </Card>
            </Col>
        </Row>


    )
}
export default MatchedBookRides;
