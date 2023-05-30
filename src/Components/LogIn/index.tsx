import React, { useState } from 'react'
import { Container, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import signUpBgImg from '../Assets/SignUpBgImg.png'
import logo from '../Assets/logo.png'
import '../LogIn/style.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import uuid from 'react-uuid';
import DashBoard from '../DashBoard';
import { json } from 'stream/consumers';
const LogIn: React.FC = () => {
    const navigate = useNavigate();

    const [userEmail, setuserEmail] = useState<string>("");
    const [userPassword, setuserPassword] = useState<string>("");
    const [emailAlert, setemailAlert] = useState<string>("");
    const [passWordAlert, setpassWordAlert] = useState<string>("");
    function validateUser(): boolean {
        var x = userEmail;
        var a = true;
        var employeeEmail_regex: RegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (employeeEmail_regex.test(x) == false) {
            a = false;
            setemailAlert("Please enter a valid employeeEmail ID !");

        }
        if (userPassword.length == 0) {
            a = false;
            setpassWordAlert("please enter password");
        }
        if (a == true) {
            return true;
        }
        else {
            return false;
        }

    }
    const addUserBackend = async () => {
        console.log("charan")
        let validate_res: boolean = validateUser();
        if (validate_res) {
            await axios.post('https://localhost:7243/api/UserDetails/login',
                {
                    "loginId": uuid().toString(),
                    "emailId": userEmail,
                    "password": userPassword

                }

            )
                .then(e => {
                    if (e.data) {
                        localStorage.setItem("password", userPassword);
                        localStorage.setItem("mail", userEmail.split("@")[0]);
                        localStorage.setItem("loginId", e.data.loginId);
                        localStorage.setItem("userData", JSON.stringify(e.data));
                        console.log(e);
                        // navigate('/userProfile');
                        if (!e.data.isSuccess) {
                            alert(e.data.errorMessage)
                        }
                        else {
                            console.log(e);
                            navigate('/dashboard');

                        }
                    }
                })

                .catch(error => console.log(error))

        }
    }
    return (
        <Container fluid className='Container'>
            <div className='home'>
                <Row>
                    <Col sm={8} lg={8} xl={8} xxl={8} className='left-cloumn'>
                        <Row>
                            <div className='logo'>
                                <img className='logo-img' src={logo} alt="logo" />
                            </div>
                        </Row>
                        <Row>
                            <Col sm={2} lg={3} xl={2}>
                                <div className='turn black-color'>
                                    <h1 className='primary-text'><i>TURN</i></h1>
                                </div>
                            </Col>
                            <Col sm={2} lg={1} xl={2}>
                                <div className='miles'>
                                    <h1 className='primary-text'><i>MILES</i></h1>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={2} lg={3} xl={2}>
                                <div className='into black-color'>
                                    <h1 className='primary-text'><i>INTO</i></h1>
                                </div>
                            </Col>
                            <Col sm={2} lg={1} xl={2}>
                                <div className='money'>
                                    <h1 className='primary-text'><i>MONEY</i></h1>
                                </div>
                            </Col>

                        </Row>
                        <Row>
                            <Col lg={12} >
                                <h3 className='login-secondary-text'>RIDES ON TAP</h3>
                            </Col>
                        </Row>
                        <Row>
                            <div className='signup-bg'>
                                <img className="login-bg-img" src={signUpBgImg} alt="backGroundImg" />
                            </div>
                        </Row>

                    </Col>
                    <Col sm={4} lg={4} xl={4} xxl={4} className='login-form'>
                        <div className="form-for-login">
                            <h2 className='login white-color'>Log In</h2>
                            <hr className='hr-tag white-color'></hr>
                            <form className='singup-fields'>
                                <input className="login-input" name='userEmail'
                                    placeholder='Enter Email Id' type="email" value={userEmail}
                                    onChange={(event) => setuserEmail(event.target.value)} />
                                <p id="alert-msg" className="alert-message font-styles">{emailAlert}</p>
                                <input name='Password' className="login-input" value={userPassword}
                                    onChange={(event) => setuserPassword(event.target.value)} placeholder='Enter Passsword' type="password" />
                                <p id="alert-msg" className="alert-message font-styles">{passWordAlert}</p>
                                <input
                                    type="button"
                                    className="login-btn black-color"
                                    id="login-submit-btn-color"
                                    onClick={() => {

                                        addUserBackend()
                                    }}
                                    value="Submit"
                                />
                                <div >
                                    <p className='signup-option white-color'>Not a member yet ? <Link to={`/signup`} className='signup-link'><u>SIGN UP</u></Link></p>
                                </div>
                            </form>
                        </div>
                    </Col>

                </Row>

            </div>


        </Container>

    )
}
export default LogIn;

