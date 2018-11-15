import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './util/set_auth_token';
import { setCurrentUser, logoutUser } from './actions/auth_actions';
import { ProtectedRoute } from './util/route_util';

import NavBar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import OutageIndex from "./components/outages/outage_index";
import OutageDetailCard from "./components/outages/outage_detail_card";
import './App.css';

// Check for User's jwtToken
// Use Async Storage for React-Native version
if(localStorage.jwtToken) {
  const jwtToken = localStorage.jwtToken;

  setAuthToken(jwtToken);
  const decoded = jwt_decode(jwtToken);
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/outages" component={OutageIndex}/>
              <ProtectedRoute exact path="/outages/:outageId" component={OutageDetailCard}/>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
