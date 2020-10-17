import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";
import { initializeFirebaseFramework } from "../../Firebase/FirebaseManager";
import * as firebase from "firebase/app";
import "firebase/auth";
import { Container } from "@material-ui/core";




const Header = () => {

  initializeFirebaseFramework();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleLogOut = () => {
    firebase.auth().signOut()
      .then(() => {

        setLoggedInUser({});
        history.replace(from);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (

    <Container>
      <div className="header-section">
        <div className="logo-section">
          <Link to="/home"><img src="https://i.ibb.co/5jBnLZS/logo.png" alt="" /></Link>
        </div>
        <div className="main-menu">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/home">Our Portfolio</Link>
            </li>
            <li>
              <Link to="/home">Our Team</Link>
            </li>
            <li>
              <Link to="/home">Contact Us</Link>
            </li>
              {
                loggedInUser.email ? <li><Link onClick={handleLogOut}  className="login" to="/logout">Logout</Link></li> : <li><Link className="login" to="/login">Login</Link></li>
              }
            <li>
              <Link className="admin" to="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Header;
