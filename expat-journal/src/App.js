import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/traveler/:id" component={Traveler} />
          <Route exact path="/traveler/location/:id" component={Trip} />
          <PrivateRoute path="/bubbles" component={Profile} />
          <PrivateRoute path="/bubbles" component={EditTrip} />
          <PrivateRoute path="/bubbles" component={PrivateTrip} />
        </Switch>
        <Header />


      </div>
    </Router>
  );
}

export default App;
