import { Card, Col, Row } from "react-bootstrap";
import '../UserCard/style.css';
import riderImage from '../Assets/user.png'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
    seatsBooked:number;
}


const UserCard: React.FC<props> = ({ rideId, rideProviderId, sourceId, destinationId, date, fair, totalSeats, availableSeats, time,seatsBooked }) => {
    const navigate = useNavigate();
    var [image,setimage] = useState(riderImage)
    const userData = JSON.parse(localStorage.getItem("userData")!)
    const userName = userData.userName;
    const userId = userData.loginId;
    if (userData.image != '') {
        image = userData.image;

    }
    const addBookRideToBackend = async () => {
        await axios.post('https://localhost:7243/api/BookRide/Booking',
            {

                "customerId": userId,
                "rideId": rideId,
                "seatsBooked": seatsBooked


            }

        )
        .then(response => { console.log(response); window.alert("user booked a ride successfully"); navigate('/dashboard'); })
            .catch(error => console.log(error))
    }
    return (

        <Row>
            <Col sm={12} lg={12}>
                <Card className="mathed-card" onClick={() => {

                    addBookRideToBackend()
                }}>
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
                            <p className="from-address values-of-card float-left">{sourceId}</p>
                        </Col>
                        <Col sm={3}>
                            <p></p>
                        </Col>
                        <Col sm={5}>
                            <p className="to-address values-of-card float-left">{destinationId}</p>
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
                            <p className="seat-availability labels-of-card float-left">Seat Availability</p>
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
                            <p className="seats-available-in-vehicle values-of-card float-left">{availableSeats}</p>
                        </Col>
                    </Row>


                </Card>
            </Col>
        </Row>


    )
}
export default UserCard;
