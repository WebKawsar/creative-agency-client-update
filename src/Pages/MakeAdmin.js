import { Grid, makeStyles, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Dashboard from '../Components/Dashboard/Dashboard';



const useStyles = makeStyles({
    root: {
      backgroundColor: "#FBD062",
      padding: "50px 0 10px",
    },
    input: {
      backgroundColor: "white",
      borderRadius: "5px",
      marginBottom: "20px"
    },
    helperText: {
      color: "red",
    },
    submit: {
      padding: "13px 60px",
      border: "none",
      backgroundColor: "green",
      color: "white",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "30px",
    },
    paper: {
        padding: "30px",
        borderRadius: "20px"
    },
    label: {
        fontWeight: "bold",
    }
  
  
  
  
});

const MakeAdmin = () => {

    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
  
        fetch('https://creative-agency-simple.herokuapp.com/makeAdmin', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(response => response.json())
        .then(result => {
            
            
            if(result){
                alert("You have successfully added an admin")
                history.push("/dashboard")
            }
        })

    };

    const classes = useStyles();
    return (
            <>
                <Dashboard>
                    <Grid container>
                        <Grid item sm={12} md={12}>
                            <Paper className={classes.paper}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Grid container>
                                        <Grid item sm={12} md={6}>
                                            <label className={classes.label} htmlFor="title">Admin Name</label>
                                            <TextField
                                                inputRef={register({
                                                    required: "Admin name is required",
                                                })}
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                className={classes.input}
                                                id="name"
                                                type="text"
                                                label="Enter name"
                                                name="name"
                                                FormHelperTextProps={{
                                                    className: classes.helperText,
                                                }}
                                                helperText={errors.name && errors.name.message}
                                            />

                                            <label className={classes.label} htmlFor="title">Admin Email</label>
                                            <TextField
                                                inputRef={register({
                                                    required: "Admin email is required",
                                                })}
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                className={classes.input}
                                                id="email"
                                                type="email"
                                                label="Enter email"
                                                name="email"
                                                FormHelperTextProps={{
                                                    className: classes.helperText,
                                                }}
                                                helperText={errors.email && errors.email.message}
                                            />

                                            <input
                                                className={classes.submit}
                                                type="submit"
                                                value="Submit"
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

export default MakeAdmin;