import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px 0 100px",
  },
  clientLogo: {
    width: "150px",
    height: "auto",
  }
  
}));

const ClientLogo = ({ logo }) => {
  const classes = useStyles();

  return (
          <>
            <Grid item sm={4} md={2}>
              <Link to="/home">
                <img className={classes.clientLogo} src={logo.img} alt="" />
              </Link>
            </Grid>
          </>
  );
};

export default ClientLogo;
