import { Box, Grid, makeStyles, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import Dashboard from "../Dashboard/Dashboard";



const useStyles = makeStyles({
  root: {
    backgroundColor: "#F4F7FC",
    height: "85vh",
  },
  form: {},
  input: {
    backgroundColor: "white",
    borderRadius: "5px",
  },
  helperText: {
    color: "red",
  },
  submit: {
    padding: "13px 60px",
    border: "none",
    backgroundColor: "black",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "40px",
  },
  container: {
    marginTop: "50px",
  },
  uploadBtn: {
    padding: "12px 40px",
    border: "none",
    display: "block",
    margin: "25px 0 0",
    borderRadius: "4px",
  },
});

const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {

    fetch("https://creative-agency-simple.herokuapp.com/addReview", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
      .then(response => response.json())
      .then(result => {

        if (result) {

          alert("You have successfully added an review");
          history.push("/dashboard")
        }
        else{

          alert("You have failed to added an review");
        }

      });
  };

  const classes = useStyles();
  return (
    <>
      <Dashboard>
        <Grid className={classes.root} container spacing={5}>
          <Grid item md={6} sm={12}>
            <Box className={classes.container}>
              <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  inputRef={register({
                    required: "Name is required",
                  })}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  className={classes.input}
                  id="name"
                  type="text"
                  label="Your name"
                  defaultValue={loggedInUser.name}
                  name="name"
                  FormHelperTextProps={{
                    className: classes.helperText,
                  }}
                  helperText={errors.name && errors.name.message}
                />

                <TextField
                  inputRef={register({
                    required: "Company's name & Designation is required",
                  })}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  className={classes.input}
                  id="company"
                  type="text"
                  label="Company's name & Designation"
                  name="company"
                  FormHelperTextProps={{
                    className: classes.helperText,
                  }}
                  helperText={errors.company && errors.company.message}
                />

                <TextField
                  inputRef={register({
                    required: "Description is required",
                  })}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  className={classes.input}
                  multiline
                  rows={5}
                  id="description"
                  type="text"
                  label="Description"
                  name="description"
                  FormHelperTextProps={{
                    className: classes.helperText,
                  }}
                  helperText={errors.description && errors.description.message}
                />

                <input
                  className={classes.submit}
                  type="submit"
                  value="Submit"
                />
              </form>
            </Box>
          </Grid>
        </Grid>
      </Dashboard>
    </>
  );
};

export default Review;
