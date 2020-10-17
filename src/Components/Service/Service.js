import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid } from "@material-ui/core";
import ServiceCard from "../ServiceCard/ServiceCard";




const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px 0 100px",
  },
  firstSection: {
    marginBottom: "20px",
    overflow: "hidden",
  },
  title: {
    fontSize: "30px",
    textAlign: "center",
    color: "#3A4256",
    marginBottom: "50px"
  },
  highlight: {
    color: "#a4ca8d",
  },
  sliderImage: {
    width: "100%",
    height: "auto",
  }


}));

const Service = () => {

const [services, setServices] = useState([]);
useEffect(() => {

    fetch("https://creative-agency-simple.herokuapp.com/services")
    .then(response => response.json())
    .then(data => setServices(data))

}, [services]);


  const classes = useStyles();
  return (
          <>
            <Box className={classes.root}>
              <Container>
                <Box className={classes.firstSection}>
                  <h3 className={classes.title}>
                    Provide awesome{" "}
                    <span className={classes.highlight}>services</span>
                  </h3>
                </Box>
                <Box>
                  <Grid container spacing={5}>
                    
                    {
                      services.map(service => (
                      <ServiceCard service={service} key={service._id}></ServiceCard>
                    ))
                    }
                  </Grid>
                </Box>
              </Container>
            </Box>
          </>
  );
};

export default Service;
