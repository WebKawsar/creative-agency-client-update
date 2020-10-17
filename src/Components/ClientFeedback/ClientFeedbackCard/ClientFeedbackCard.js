import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
      
  },
  header: {
    fontWeight: "bold"
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },



}));
const ClientFeedbackCard = (props) => {
    const {name, company, userImage, description} = props.client;

    const classes = useStyles();
    return (
            <>
            <Grid className={classes.root} item sm={6} md={4}>

                        
                <Card>
                    <CardHeader
                        avatar={
                            
                            <Avatar className={classes.avatar} alt="Remy Sharp" src={userImage} />
                        }
                        title={name}
                        subheader={company}
                    />
                    
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                            {
                            description.length > 3 &&
                            description.substring(0, 120 - 3) + "..."
                          }
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            
        </>
    );
};

export default ClientFeedbackCard;