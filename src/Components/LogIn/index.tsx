import React from 'react'
import { Container, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import signUpBgImg from '../Assets/SignUpBgImg.png'
import logo from '../Assets/logo.png'
import '../LogIn/style.css'
const LogIn: React.FC = () => {
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
                                <div className='turn black-color'>
                                    <h1 className='primary-text'><i>TURN</i></h1>
                                </div>
                            </Col>
                            <Col sm={2}>
                                <div className='miles'>
                                    <h1 className='primary-text'>MILES</h1>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={2}>
                                <div className='into black-color'>
                                    <h1 className='primary-text'>INTO</h1>
                                </div>
                            </Col>
                            <Col sm={2}>
                                <div className='money'>
                                    <h1 className='primary-text'>MONEY</h1>
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
                    <Col sm={4} className='login-form'>
                        <div className="form-for-login">
                            <h2 className='login white-color'>Log In</h2>
                            <hr className='hr-tag white-color'></hr>
                            <form className='singup-fields'>
                                <input className="input"
                                    placeholder='Enter Email Id' type="email" />
                                <input className="input"
                                    placeholder='Enter Passsword' type="password" />
                               
                                <button className="login-btn black-color" id ="submit-btn-color" type="submit">
                                    Submit
                                </button>
                                <div className='signup-option white-color'>
                                    <p>Not a member yet ? SIGN UP</p>
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
export default LogIn;