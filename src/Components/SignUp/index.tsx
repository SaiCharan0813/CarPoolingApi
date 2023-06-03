import React from 'react'
import { Container, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import signUpBgImg from '../Assets/SignUpBgImg.png'
import logo from '../Assets/logo.png'
import '../SignUp/style.css'
const SignUp: React.FC = () => {
    return (
        <Container fluid className='Container'>
            <div className='home'>
                <Row>
                    <Col sm={8} className='left-cloumn'>
                        <Row>
                            <div className='logo'>
                                <img className='logo-img' src={logo} alt="logo" />
                            </div>
                        </Row>
                        <Row>
                            <Col sm={2}>
                                <div className='turn'>
                                    <h1 className='primary-text black-color'><i>TURN</i></h1>
                                </div>
                            </Col>
                            <Col sm={2}>
                                <div className='miles orange-color'>
                                    <h1 className='primary-text'><i>MILES</i></h1>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={2}>
                                <div className='into black-color'>
                                    <h1 className='primary-text'><i>INTO</i></h1>
                                </div>
                            </Col>
                            <Col sm={2}>
                                <div className='money'>
                                    <h1 className='primary-text'><i>MONEY</i></h1>
                                </div>
                            </Col>

                        </Row>
                        <Row>
                            <div >
                                <h3 className='secondary-text'>RIDES ON TAP</h3>
                            </div>
                        </Row>
                        <Row>
                            <div className='signup-bg'>
                                <img className="bg-img" src={signUpBgImg} alt="backGroundImg" />
                            </div>
                        </Row>

                    </Col>
                    <Col sm={4} className='sign-up-form '>
                        <div className="form">
                            <form className='singup-fields'>
                                <input className="input"
                                    placeholder='Enter Email Id' type="email" />
                                <input className="input"
                                    placeholder='Enter Passsword' type="password" />
                                <input className="input"
                                    placeholder='Confirm Password' type="password" />

                                <button className="submit-btn black-color" type="submit" id="submit-btn-colour">
                                    Submit
                                </button>
                                <div className='login-option'>
                                    <p>Aleready a member?Login</p>
                                </div>
                            </form>
                        </div>

                    </Col>

                </Row>

            </div>
            <div className='sign-up-form'>

            </div>


        </Container>

    )
}
export default SignUp;