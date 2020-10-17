import { Box} from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Col, Row, Container, Alert, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleRegisterSystem, initializeFirebaseFramework } from '../../Firebase/FirebaseManager';
import "./Register.css";



const Register = (props) => {
    initializeFirebaseFramework();

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        
        handleRegisterSystem(data)
        .then(response => {

            if(response.success && response.email){
                const registerUser = {...loggedInUser, ...response};

                setLoggedInUser(registerUser);
                history.replace(from);
            }
            else {
                
                const registerUserError = {...loggedInUser, ...response};

                setLoggedInUser(registerUserError);
            }
        })

    }

    const [show, setShow] = useState(true);
    return (
        <Container>
            <Box className="register-section">
                <Box className="register">
                    <Row className="justify-content-md-center">
                        <Col md={6}>
                            
                            {
                                (loggedInUser.error && show) && 
                                    <Alert variant="danger" onClick={() => setShow(false)} dismissible>
                                            <Alert.Heading>Oh bro! You got an error!</Alert.Heading>
                                            <p>{loggedInUser.error}</p>
                                    </Alert>
                                 
                            }

                            <Box className="register-form">
                                <h3>Create an account</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <Box className="input-box">
                                        <input type="text" id="firstName" name="firstName" ref={register({ required: "First name is required"})} placeholder="First name"/>
                                        {
                                            errors.firstName && <span className="error">{errors.firstName.message}</span>
                                        }
                                    </Box>

                                    <Box className="input-box">
                                        <input type="text" name="lastName" ref={register({ required: "Last name is required"})} placeholder="Last name"/>
                                        {
                                            errors.lastName && <span className="error">{errors.lastName.message}</span>
                                        }
                                    </Box>

                                    <Box className="input-box">
                                        <input type="email" name="email" ref={register({ 
                                            required: "Email is required",
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: "Please provide a valid email address"
                                            }
                                            })} placeholder="Email address"/>
                                        {
                                            errors.email && <span className="error">{errors.email.message}</span>
                                        }

                                    </Box>

                                    <Box className="input-box">
                                        
                                        <input type="password" name="password" ref={register({
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password containing at least 8 characters"
                                            },
                                            pattern: {
                                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                                                message: "Password containing characters, number, upper and lowercase"
                                            }
                                            })} placeholder="Password"/>
                                        {
                                            errors.password && <span className="error">{errors.password.message}</span>
                                        }

                                    </Box>

                                    <Box className="input-box">
                                        <input type="password" name="rePassword" ref={register({
                                            required: "Confirm password is required",
                                            validate: (value) => value === watch("password") || "Passwords do not match"
                                        })} placeholder="Confirm password"/>
                                        {
                                            errors.rePassword && <span className="error">{errors.rePassword.message}</span>
                                        }
                                    </Box>
                                    
                                    <input type="submit" value="Create an account" />
                                </form>

                                <p className="already-account">Already have an account? <span onClick={props.handleRegister} className="toogle">Login</span></p> 
                            </Box> 
                        </Col>
                    </Row>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;