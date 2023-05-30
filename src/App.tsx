import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import DashBoard from './Components/DashBoard';
import BookRide from './Components/BookRide';
import OfferRide from './Components/OfferRide';
import MyRides from './Components/MyRides';
import UserProfile from './Components/UserProfile';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* default path to diaplay the employee directory and default components   */}
          <Route
            path="/"
            element={

              <div className="App">
                <SignUp />
                <LogIn />
                <DashBoard />
                <BookRide />
                <OfferRide />
                <MyRides />
              </div>


            }
          />
          <Route
            path="/login"
            element={

              <div className="App">
                <LogIn/>
              </div>


            }
          />
          <Route
            path="/signup"
            element={

              <div className="App">
                <SignUp/>
              </div>


            }
          />
          <Route
            path="/bookride"
            element={

              <div className="App">
                <BookRide/>
              </div>


            }
          />
           <Route
            path="/offerride"
            element={

              <div className="App">
                <OfferRide/>
              </div>


            }
          />
          <Route
            path="/dashboard"
            element={
              <div className="App">
                <DashBoard/>
              </div>


            }
          />
          <Route
            path="/myrides"
            element={
              <div className="App">
                <MyRides/>
                
              </div>


            }
          />
           <Route
            path="/userprofile"
            element={
              <div className="App">
               
                <UserProfile/>
              </div>


            }
          />
        </Routes>
      </Router>
    </>




    // <div className="App">
    //   <SignUp />
    //   <LogIn/>
    //   <DashBoard/>
    //   <BookRide/>
    //   <OfferRide/>
    //   <MyRides/>
    // </div>
  );
}

export default App;
