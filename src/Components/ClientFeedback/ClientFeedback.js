import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ClientFeedbackCard from './ClientFeedbackCard/ClientFeedbackCard';



const useStyles = makeStyles((theme) => ({
    root: {
        padding: "30px 0 100px"
    },
    firstSection: {
        marginBottom: "60px",
        overflow: "hidden"
    },
    title: {
      fontSize: "30px",
      textAlign: "center"
    },
    highlight: {
        color: "#a4ca8d"
    }

}));


const ClientFeedback = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {

        fetch("https://creative-agency-simple.herokuapp.com/reviews")
        .then(response => response.json())
        .then(data => setReviews(data))

    }, [])

    const classes = useStyles();
    return (
            <Container>
                <Box className={classes.root}>
                    <Box className={classes.firstSection}>
                        <h3 className={classes.title}>Clients <span className={classes.highlight}>Feedback</span></h3>
                    </Box>
                    <Box>
                        <Grid container spacing={3}>
                            {
                                reviews.map((client, index) => <ClientFeedbackCard client={client} key={index}></ClientFeedbackCard>)
                                
                            }
                        </Grid>
                    </Box>
                </Box>
            </Container>
    );
};

export default ClientFeedback;