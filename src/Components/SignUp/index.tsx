import React, { useState } from 'react'
import { Container, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import signUpBgImg from '../Assets/SignUpBgImg.png'
import logo from '../Assets/logo.png'
import '../SignUp/style.css'
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import IUser from '../IUser/IUser';
import uuid from 'react-uuid';
import axios from 'axios';
const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const [userEmail, setuserEmail] = useState<string>("");
    const [userPassword, setuserPassword] = useState<string>("");
    const [userName, setuserName] = useState<string>("");
    const [userConfirmPassword, setuserConfirmPassword] = useState<string>("");
    const [emailAlert, setemailAlert] = useState<string>("");
    const [passwordAlert, setpasswordAlert] = useState<string>("");
    const [userNameAlert, setuserNameAlert] = useState<string>("");
    const [confirmPasswordAlert, setconfirmPasswordAlert] = useState<string>("");

    function validateUser(): boolean {
        var a = true;
        var x = userEmail;
        var employeeEmail_regex: RegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (employeeEmail_regex.test(x) == false) {
            a = false;
            setemailAlert("Please enter a valid Email ID !");

        }
        if (userPassword.length == 0) {
            a = false;
            setpasswordAlert("please enter password");
        }
        if (userName.length == 0) {
            a = false;
            setuserNameAlert("please enter userName");
        }
        if (userPassword != userConfirmPassword) {
            a = false;
            setconfirmPasswordAlert("password not matched");
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
            await axios.post('https://localhost:7243/api/UserDetails/signup',
                {
                    "loginId": uuid().toString(),
                    "emailId": userEmail,
                    "password": userPassword,
                    "userName": userName


                }

            )
                .then(response => {
                    if (!response.data.isSuccess) {
                        alert(response.data.errorMessage)
                    }
                    else{

                        console.log(response); window.alert("user added successfully"); navigate('/login');
                    }

                })
                .catch(e => { console.log("eee", e.response.data); });




        }
    }
    return (
        <Container fluid className='Container'>
            <div className='home'>
                <Row>
                    <Col sm={8} lg={8} xl={8} xxl={8} className='left-cloumn'>
                        <Row>
                            <div className='logo'>
                                <img onClick={() => {

                                    navigate("/login")
                                }} className='logo-img' src={logo} alt="logo" />
                            </div>
                        </Row>
                        <Row>
                            <Col sm={2} lg={3} xl={2} >
                                <div className='turn'>
                                    <h1 className='primary-text black-color'><i>TURN</i></h1>
                                </div>
                            </Col>
                            <Col sm={2} lg={1} xl={2}>
                                <div className='miles orange-color'>
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
                            <Col lg={12}>
                                <h3 className='signup-secondary-text'>RIDES ON TAP</h3>
                            </Col>
                        </Row>
                        <Row lg={4}>
                            <div className='signup-bg'>
                                <img className="signup-bg-img" src={signUpBgImg} alt="backGroundImg" />
                            </div>
                        </Row>

                    </Col>
                    <Col sm={4} lg={4} xl={4} xxl={4} className='sign-up-form '>
                        <div className="signup-form">
                            <form className='singup-fields'>
                                <input className="signup-input" name='userEmail'
                                    placeholder='Enter Email Id' type="email" value={userEmail}
                                    onChange={(event) => setuserEmail(event.target.value)} />
                                <div>
                                    <p id="alert-msg" className="alert-message font-styles">{emailAlert}</p>
                                </div>

                                <input name='Password' className="signup-input" value={userPassword}
                                    onChange={(event) => setuserPassword(event.target.value)} placeholder='Enter Passsword' type="password" />
                                <p id="alert-msg" className="alert-message font-styles">{passwordAlert}</p>
                                <input className="signup-input" name='Password'
                                    onChange={(event) => setuserConfirmPassword(event.target.value)} placeholder='Confirm Password' type="password" />
                                <p id="alert-msg" className="alert-message font-styles">{confirmPasswordAlert}</p>
                                <input type="text" name="userName" className="signup-input" placeholder="userName"
                                    onChange={(event) => { setuserName(event.target.value); }} />
                                <p id="alert-msg" className="alert-message font-styles">{userNameAlert}</p>
                                <input
                                    type="button"
                                    className="signup-submit-btn black-color"
                                    id="signup-submit-btn-colour"
                                    onClick={() => {

                                        addUserBackend()
                                    }}
                                    value="Submit"
                                />

                                <div >
                                    <p className='login-option'>Aleready a member? <Link to={`/login`} className='login-link' ><u>LOG</u>&nbsp;IN</Link></p>
                                </div>
                            </form>
                        </div>

                    </Col>

                </Row >

            </div >
        </Container >

    )
}
export default SignUp;