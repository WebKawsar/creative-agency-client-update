import { Box, Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { UserContext } from "../../App";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F4F7FC",
    minHeight: "85vh",
  },
  paper: {
    padding: "30px",
    borderRadius: "20px",
  },
  serviceImg: {
    width: "100px",
    height: "100px",
  },
  statusBtn: {
    padding: "13px 40px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "tomato",
    color: "white",
  },
  title: {
    fontSize: "21px",
    margin: "23px 0 14px",
    fontWeight: "bold",
  },
  description: {
    fontSize: "17px",
  },
  
}));

const ServiceList = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {

    fetch(`https://creative-agency-simple.herokuapp.com/orderByUser/${loggedInUser.email}`)
      .then((response) => response.json())
      .then((result) => setOrders(result));

  }, []);


  const classes = useStyles();
  return (
          <>
            <Dashboard>
              <Grid className={classes.root} container spacing={5}>
                
                {orders.map((order) => (
                  <Grid key={order._id} item md={6} sm={12}>
                    <Paper className={classes.paper}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <img
                          className={classes.serviceImg}
                          src={`data:image/png;base64,${order.newImage.img}`}
                          alt=""
                        />

                        <button className={`${order.status}`}>{order.status}</button>
                      </Box>
                      <Box>
                        <h3 className={classes.title}>{order.service}</h3>
                        <p className={classes.description}>
                          {
                            order.description.length > 50 &&
                            order.description.substring(0, 120 - 3) + "..."
                          }
                        </p>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Dashboard>
          </>
  );
};

export default ServiceList;
