import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Header from '../Header/Header';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient( #fbd062, #fbd062)',
        clipPath: "polygon(0 100%, 100% 72%, 100% 0, 0 0)",
        height: "100vh",
    },
        imageSection: {
        textAlign: "center"
    },
        image: {
        maxWidth: "100%",
        height: "58vh"
    },
        mainButton: {
        padding: "13px 60px",
        border: "2px solid transparent",
        backgroundColor: "black",
        borderRadius: "5px",
        color: "white",
        fontWeight: "600",
        cursor: "pointer",
        transition: "1s",
        "&:hover": {
            backgroundColor: "#FBD062",
            border: "2px solid black",
            color: "black"
        }
    }



}));

const HomeIntro = () => {

    const classes = useStyles();
    return (
            <>
                <Box id="home-intro" className={classes.root}>
                <Header></Header>
                    <Container>
                        <Box className={classes.intro}>
                            <Grid container>
                                <Grid className="intro-text" item sm={12} md={4}>
                                    <h1>Lets's Grow Your <br/> Brand To The <br/> Next Level </h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur ipsam distinctio aperiam laudantium voluptatum iste incidunt excepturisint?</p>
                                    <button className={classes.mainButton}>Hire Us</button>
                                </Grid>
                                <Grid className="intro-image-section" item sm={12} md={8}>
                                    <Box className={classes.imageSection}>
                                        <img id="intro-image" className={classes.image} src="https://i.ibb.co/XsSsHJ9/Frame.png" alt=""/>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </>
    );
};

export default HomeIntro;