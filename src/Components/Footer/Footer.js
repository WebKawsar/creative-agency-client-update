import { Box, Container, Grid, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";



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
    padding: "13px 60px",
    border: "none",
    backgroundColor: "black",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
  copyright: {
    color: "black",
    fontWeight: "bold",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: "#3A4256"
    }
  },
  copyrightSection: {
    textAlign: "center",
    marginTop: "70px"
  }



});
const Footer = () => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const classes = useStyles();
  return (
        <Box className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item md={6} sm={12}>
                        <Box>
                        <h1>Let us handle your project, professionally.</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                            officia, sunt at velit illo similique. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Vero.
                        </p>
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <Box>
                        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                            inputRef={register({
                                required: "Email is required",
                            })}
                            variant="outlined"
                            margin="normal"
                            fullWidth
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
                            label="Your name / company's name"
                            name="name"
                            FormHelperTextProps={{
                                className: classes.helperText,
                            }}
                            helperText={errors.name && errors.name.message}
                            />

                            <TextField
                            inputRef={register({
                                required: "Your message is required",
                            })}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            className={classes.input}
                            multiline
                            rows={10}
                            id="message"
                            type="text"
                            label="Your message"
                            name="message"
                            FormHelperTextProps={{
                                className: classes.helperText,
                            }}
                            helperText={errors.message && errors.message.message}
                            />

                            <input className={classes.submit} type="submit" value="Send" />
                        </form>
                        </Box>
                    </Grid>
                    <Grid className={classes.copyrightSection} item sm={12} md={12}>
                        <p>Copyright &copy; <a href="https://facebook.com/web.kawsarahmed" className={classes.copyright}>Kawsar Ahmed</a> {(new Date()).getFullYear()}</p>
                    </Grid>
                </Grid>
            </Container>
        </Box>
  );
};

export default Footer;
