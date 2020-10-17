import { Grid, makeStyles, Paper, TextField } from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";



const useStyles = makeStyles({
  root: {
    backgroundColor: "#FBD062",
    padding: "50px 0 10px",
  },
  input: {
    backgroundColor: "white",
    borderRadius: "5px",
    margin: "5px 0 30px"
  },
  helperText: {
    color: "red",
  },
  submit: {
    padding: "18px 102px",
    border: "none",
    backgroundColor: "black",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "30px",
  },
  inputPrice: {
    width: "50%",
    backgroundColor: "white",
    borderRadius: "5px",
  },
  uploadBtn: {
    padding: "14px 22px",
    border: "2px solid #77C69E",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#DEFFED",
    color: "green",
    margin: "0 0 20px",
    display: "block"
  },
  paper: {
    padding: "30px",
    borderRadius: "20px",
  },
  label: {
    fontWeight: "bold",
    margin: "0"
  },


});

const AddService = () => {
  
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("description", data.description);
    formData.append("title", data.title);

    fetch("https://creative-agency-simple.herokuapp.com/addService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        
        if (result) {
          
          alert("Successfully added service");
          history.push("/dashboard")
        }
      });
  };

  const handleFile = () => {
    document.getElementById("image").click();
  };

  const classes = useStyles();
  return (
    <>
      <Dashboard>
        <Grid container>
          <Grid item sm={12} md={12}>
            <Paper className={classes.paper}>
              <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                  <Grid item sm={12} md={6}>
                    <label className={classes.label} htmlFor="title">
                      Service Title
                    </label>
                    <TextField
                      inputRef={register({
                        required: "Service Title is required",
                      })}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      className={classes.input}
                      id="title"
                      type="text"
                      label="Enter title"
                      name="title"
                      FormHelperTextProps={{
                        className: classes.helperText,
                      }}
                      helperText={errors.title && errors.title.message}
                    />

                    <label className={classes.label} htmlFor="title">
                      Description
                    </label>
                    <TextField
                      inputRef={register({
                        required: "Description is required",
                      })}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      className={classes.input}
                      multiline
                      rows={10}
                      id="description"
                      type="text"
                      label="Enter description"
                      name="description"
                      FormHelperTextProps={{
                        className: classes.helperText,
                      }}
                      helperText={
                        errors.description && errors.description.message
                      }
                    />

                    <input
                      style={{ display: "none" }}
                      ref={register({
                        required: "File is required",
                      })}
                      type="file"
                      name="image"
                      id="image"
                    />
                    {/* <label className={classes.label} htmlFor="image">Icon</label> */}
                    <button
                      className={classes.uploadBtn}
                      type="button"
                      onClick={handleFile}
                    >
                      <CloudUpload></CloudUpload> Upload image
                    </button>
                    {errors.image && (
                      <p style={{ color: "red", marginTop: "8px" }}>
                        {errors.image.message}
                      </p>
                    )}

                    <input
                      className={classes.submit}
                      type="submit"
                      value="Send"
                    />
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Dashboard>
    </>
  );
};

export default AddService;
