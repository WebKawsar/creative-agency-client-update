import React, { useContext, useEffect } from "react";
import { UserContext } from "../App";
import Dashboard from "../Components/Dashboard/Dashboard";



const MainDashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);


  useEffect(() => {

    fetch(`https://creative-agency-simple.herokuapp.com/admin/${loggedInUser.email}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const admin = { ...loggedInUser };
          admin.userType = true;
          setLoggedInUser(admin);
        } else {
          const admin = { ...loggedInUser };
          admin.userType = false;
          setLoggedInUser(admin);
        }
      });


  }, []);

  return (
          <>
            <Dashboard>
              <h2 style={{ textAlign: "center" }}>
                <span style={{color: "tomato"}}>{loggedInUser.name}</span> Welcome to Creative Agency Dashboard
              </h2>
            </Dashboard>
          </>
  );
};

export default MainDashboard;
