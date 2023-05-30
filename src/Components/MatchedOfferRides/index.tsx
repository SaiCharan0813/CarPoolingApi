import { Card, Col, Row } from "react-bootstrap";
import '../UserCard/style.css';
import userImage from '../Assets/user.png'
import axios from "axios";
import { useEffect, useState } from "react";
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
}


const MatchedOfferRides: React.FC<props> = ({ rideId, rideProviderId, sourceId, destinationId, date, fair, totalSeats, availableSeats, time }) => {
    const [fromCities, setfromCities] = useState([]);
    var [image,setimage] = useState(userImage)
    const [toCities, settoCities] = useState([]);
    const userData = JSON.parse(localStorage.getItem("userData")!)
    const userName = userData.userName;
    if (userData.image != '') {
        image = userData.image;

    }
    const addBookRideToBackend = async () => {
        await axios.post('https://localhost:7243/api/BookRide/Booking',
            {

                "customerId": rideProviderId,
                "rideId": rideId


            }

        )
            .then(e => console.log(e))
            .catch(error => console.log(error))
    }
    useEffect(() => {
        const getCitiesNames = async () => {
            await axios.get('https://localhost:7243/api/OfferRide/api/OfferRide/TotalCities')
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
export default MatchedOfferRides;
