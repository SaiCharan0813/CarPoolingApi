import React, { useState } from "react"
import { Card, Col, Row } from "react-bootstrap"
import '../UserProfile/style.css'
import userPic from '../Assets/user.png'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import axiosInstance from "../axiosInstance"
// import { globalVariable } from '../global';

var image_url: any
var file: string
const UserProfile: React.FC = () => {
    const navigate = useNavigate();
    var localDetails = JSON.parse(localStorage.getItem("userData")!);
    var [userImage, setuserImage] = useState(userPic);
    // var [userName, setuserName] = useState<string>(localDetails.userName);    
    // localDetails.userName = userName;
    localStorage.setItem("userData", JSON.stringify(localDetails));
    var [userName, setuserName] = useState<string>("newUser")
    var [userEmail, setuserEmail] = useState<string>("newUserEmail")
    const [passWordAlert, setpassWordAlert] = useState<string>("");
    const userData = JSON.parse(localStorage.getItem("userData")!)
    if(userData !=null && userData.userName !=''){
        userEmail = userData.emailId;
    }
    // userImage = userData.image;
    if(userData !=null && userData.userName !=''){
        userName = userData.userName;
    }
    
    if (userData !=null && userData.image != '') {
        userImage = userData.image;

    }
    const userLoginId = localStorage.getItem("loginId");
    const userPassword = localStorage.getItem("password");
    function previewFile(event: any) {
        var file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = (e) => {
            image_url = reader.result;
        }
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    const addUserProfileBackend = async (e: any) => {
        e.preventDefault();

        console.log("charan")
        userImage = image_url;
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + { globalVariable };
        // axios.defaults.headers.common['Content-Type'] = 'application/json';
        await axiosInstance.put('http://localhost:5290/api/UserDetails/userProfile',
            {
                "loginId": userLoginId,
                "userName": JSON.parse(localStorage.getItem("userData")!).userName,
                "emailId": userEmail,
                "password": userPassword,
                "image": userImage.toString()

            }

        )
            .then(e => {
                localStorage.setItem("userData", JSON.stringify(e.data));
                console.log(e);

                //     userData.data.useName = userName;
                //     userData.data.image = userImage;
                // localStorage.setItem(JSON.stringify("userData"),userData)
            })
            .catch(error => console.log(error))
        // setuserName(JSON.parse(localStorage.getItem("userData")!).userName)
        window.location.reload();
        //console.log(JSON.stringify(obj))
    }

    // const testFunc = function (event: any) {
    //     event.preventDefault();
    //     setuserName(event.target.value);
    // }

    return (

        <Row>
            <Col className='user-profile-form '>
                <div className="form-user-profile">
                    <form className='user-profile-fields'>

                        <label htmlFor="select_img" className="form-field-image position-relative"><b>Select Image</b></label>
                        <img className="user-image" src={userImage} alt="userImage" />
                        <input type="file" className="form-control form-field-value-profile" id="image-input" name="imageurl" onChange={(event) => previewFile(event)} accept="image/jpeg, image/png, image/jpg" />
                        <label htmlFor="Last_name" className="form-field-name position-relative" ><b>User Name</b></label>
                        <p className={`form-fields form-fields-color  'content-editable-hidden' : 'content-tohide position-relative'} `}>{userName}</p>
                        <label htmlFor="employeeEmail" className="form-field-email"><b>Email</b></label>
                        <p className={`form-fields form-fields-color  'content-editable-hidden' : 'content-tohide position-relative'} `}>{userEmail}</p>
                        <div className="buttons">
                            <span className="back-button">
                        <button className="button" onClick={() => {

                        navigate("/dashboard")

                        }}>&#8592;Back</button>
                        </span>
                        <span className="submit-button">
                        <input
                            type="button"
                            className="button black-color"
                            id="submit-btn-colour"
                            onClick={(event) => { addUserProfileBackend(event) }}
                            value="Submit"
                        />
                        </span>
                        </div>
                    </form>
                </div>


            </Col>

        </Row >


    )
}
export default UserProfile;