import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import DashBoard from './Components/DashBoard';
import BookRide from './Components/BookRide';
import OfferRide from './Components/OfferRide';
import MyRides from './Components/MyRides';

function App() {
  return (
    <div className="App">
      <SignUp />
      <LogIn/>
      <DashBoard/>
      <BookRide/>
      <OfferRide/>
      <MyRides/>
    </div>
  );
}

export default App;
