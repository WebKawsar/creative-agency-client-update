import { Box, Grid, makeStyles, TextField } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../App';
import Dashboard from '../Components/Dashboard/Dashboard';



const useStyles = makeStyles({
    root: {
      backgroundColor: "#FBD062",
      padding: "50px 0 10px",
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
      padding: "18px 75px",
      border: "none",
      backgroundColor: "black",
      color: "white",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "30px"
    },
    inputPrice: {
      width: "50%",
      backgroundColor: "white",
      borderRadius: "5px",
    },
    uploadBtn: {
      padding: "14px 60px",
      border: "2px solid #77C69E",
      borderRadius: "5px",
      margin: "15px 0 0 2%",
      width: "48%",
      cursor: "pointer",
      backgroundColor: "#DEFFED",
      color: "green"
    }
  
  
  
});
  

const AddOrder = () => {

    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
  
      fetch(`https://creative-agency-simple.herokuapp.com/serviceById/${serviceId}`)
      .then(response => response.json())
      .then(result => setService(result))
  
    }, [])



    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        

        const newData = data;
        newData.newImage = service.image;
        newData.status = "pending";
        newData.description = service.description;

        const jsonData = JSON.stringify(newData);
        const formData = new FormData();
        formData.append("image", data.image[0]);
        formData.append("data", jsonData);
  
        fetch('https://creative-agency-simple.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {

            if(result){
                console.log(result);
                alert("You have successfully placed an order")
                history.push("/dashboard/services")
            }

        })
  
  
    };

    const handleFile = () => {
      document.getElementById('image').click()
    }

    const classes = useStyles();
    return (
            <>
                <Dashboard>
                    <Grid container>
                    <Grid item md={6} sm={12}>
                        <Box>
                        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                            
                            <TextField
                            inputRef={register({
                                required: "Name is required",
                            })}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            defaultValue={loggedInUser.name}
                            className={classes.input}
                            id="name"
                            type="text"
                            label="Your name / company's name"
                            name="name"
                            FormHelperTextProps={{
                                className: classes.helperText,
                            }}
                            helperText={errors.name && errors.name.message}
                            />

                            <TextField
                            inputRef={register({
                                required: "Email is required",
                            })}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            defaultValue={loggedInUser.email}
                            className={classes.input}
                            id="email"
                            type="email"
                            label="Your email address"
                            name="email"
                            FormHelperTextProps={{
                                className: classes.helperText,
                            }}
                            helperText={errors.email && errors.email.message}
                            />

                            {
                                service.title && 
                                <TextField
                                inputRef={register({
                                    required: "Service is required",
                                })}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                defaultValue={service.title}
                                className={classes.input}
                                id="service"
                                type="text"
                                label="Service name"
                                name="service"
                                FormHelperTextProps={{
                                    className: classes.helperText,
                                }}
                                helperText={errors.service && errors.service.message}
                                />
                            }

                            <TextField
                            inputRef={register({
                                required: "Projects details is required",
                            })}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            className={classes.input}
                            multiline
                            rows={5}
                            id="message"
                            type="text"
                            label="Projects details"
                            name="message"
                            FormHelperTextProps={{
                                className: classes.helperText,
                            }}
                            helperText={errors.message && errors.message.message}
                            />

                            <TextField
                            inputRef={register({
                                required: "Price is required",
                            })}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            className={classes.inputPrice}
                            id="price"
                            type="number"
                            label="Price"
                            name="price"
                            FormHelperTextProps={{
                                className: classes.helperText,
                            }}
                            helperText={errors.price && errors.price.message}
                            />

                            <input style={{display: "none"}} ref={register({
                                required: "File is required",
                            })} type="file" name="image" id="image"/>
                            
                            <button className={classes.uploadBtn} type="button" onClick={handleFile}><CloudUpload></CloudUpload> Upload project file</button>
                            {
                            errors.image && <p style={{color: 'red'}}>{errors.image.message}</p>
                            }
                            

                            <input className={classes.submit} type="submit" value="Send" />
                        </form>
                        </Box>
                    </Grid>
                    </Grid>
                </Dashboard> 
            </>
    );
};

export default AddOrder;