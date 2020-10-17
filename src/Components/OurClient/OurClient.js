import { Container, Grid } from "@material-ui/core";
import React from "react";
import ClientLogo from "../ClientLogo/ClientLogo";

const clientLogo = [
  { name: "Airbnb", img: "https://i.ibb.co/xfGx0cb/airbnb.png" },
  { name: "Google", img: "https://i.ibb.co/fxS1cb6/google.png" },
  { name: "Logo", img: "https://i.ibb.co/5jBnLZS/logo.png" },
  { name: "Netflix", img: "https://i.ibb.co/qCNBz0h/netflix.png" },
  { name: "Slack", img: "https://i.ibb.co/Dpt599h/slack.png" },
  { name: "Uber", img: "https://i.ibb.co/HDRJmDQ/uber.png" },
];


const OurClient = () => {

  return (
    <>
      <Container>
        <Grid container display="flex" alignItems="center" spacing={3}>
          {
            clientLogo.map((logo, index) => (
            <ClientLogo logo={logo} key={index}></ClientLogo>
          ))
          }
        </Grid>
      </Container>
    </>
  );
};

export default OurClient;
