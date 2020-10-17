import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AdminServiceList from "./Pages/AdminServiceList";
import AddService from "./Pages/AddService";
import MakeAdmin from "./Pages/MakeAdmin";
import AddOrder from "./Pages/AddOrder";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import MainDashboard from "./Pages/MainDashboard";
import UserServiceList from "./Pages/UserServiceList";
import UserReview from "./Pages/UserReview";
import "bootstrap/dist/css/bootstrap.min.css";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute exact path="/dashboard">
            <MainDashboard></MainDashboard>
          </PrivateRoute>

          <PrivateRoute path="/dashboard/order/:serviceId">
            <AddOrder></AddOrder>
          </PrivateRoute>

          <PrivateRoute path="/dashboard/services">
            <UserServiceList></UserServiceList>
          </PrivateRoute>

          <PrivateRoute path="/dashboard/review">
            <UserReview></UserReview>
          </PrivateRoute>

          <PrivateRoute path="/dashboard/addService">
            <AddService></AddService>
          </PrivateRoute>

          <PrivateRoute path="/dashboard/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>

          <PrivateRoute path="/dashboard/adminServiceList">
            <AdminServiceList></AdminServiceList>
          </PrivateRoute>

          <Route exact path="/">
            <Home></Home>
          </Route>
          
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
