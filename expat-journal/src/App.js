import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav';
import Browse from './components/Browse'
import Traveler from './components/Traveler'

import Trip from './components/Trip'
import Profile from './components/Profile'
import LoginForm from "./components/LoginForm";
import EditTrip from "./components/EditTrip";
// import PrivateTrip from "./components/PrivateTrip";
import PrivateRoute from './auth/routes/PrivateRoute'
import WelcomePage from './components/WelcomePage'

import {TripContext} from './contexts/TripContext';
import { ProfileContext } from './contexts/ProfileContext';
import {AllTripsContext} from './contexts/AllTripsContext';
import {AllProfilesContext} from './contexts/AllProfilesContext';

function App() {

  const traveler = {
    //Required fields
    first_name: 'a',
    last_name: '',
    email:'',
    password:'',
    profileType: '',
    //Auto-generated
    profileUrl:'',
    profileCardUrl: '',
    userTrips: [],
    user_id: "",
  };

  const loginCreds = {
    email: '',
    password: '',
    user_id: ''
  }

  const location = {
    user_id: '',
    location:'',
    description: '',
    pictures: [],
    locationUrl: '',
    locationCardUrl: '',
    trip_id: ''
  };

  //Each public traveler displayed on public browse page with Card
  const profiles = [];
  const userTrips = [];

  const[travelerState, setTraveler] = useState(traveler);
  const[locationState, setLocation] = useState(location);
  const[profilesState, setProfiles] = useState(profiles);
  const[tripsState, setUserTrips] = useState(userTrips);
  const[loginState, setLogin] = useState(loginCreds);

  const changeTraveler = () => {
    setTraveler()
  }

  return (

    <div>
      <Router>
        <div className="App">
          <Nav />

          <Switch>
            {/* <ProfileContext.Provider value={{travelerState, setTraveler}}>
              <Route exact path="/" component={Home} />
            </ProfileContext.Provider> */}
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/browse" component={Browse} />
            <PrivateRoute exact path='/profile/:id' component={Profile} />
            <Route exact path="/traveler/:id" component={Traveler} />
            <Route path="/traveler/:id/location/:lid" component={Trip} />
            <ProfileContext.Provider value={{loginState, setLogin, setTraveler, travelerState}}>
              <Route exact path="/login" component={LoginForm} />
            </ProfileContext.Provider> 

            {/* <PrivateRoute path="/profile/:id/editTrip/:lid" component={EditTrip} />

            <PrivateRoute path="/profile/:id/myTrip/:lid" component={PrivateTrip} />  */}
            {/* <PrivateRoute path="/profile/:id/location/:lid" component={PrivateTrip} />  */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
