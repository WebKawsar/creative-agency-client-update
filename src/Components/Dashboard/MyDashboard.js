import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Storage from "@material-ui/icons/Storage";
import ListIcon from "@material-ui/icons/List";
import Add from "@material-ui/icons/Add";
import SmsIcon from "@material-ui/icons/Sms";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Box } from "@material-ui/core";
import { UserContext } from "../../App";




const drawerWidth = 260;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    textAlign: "center",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  logo: {
    height: "40px",
    margin: "18px 0"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: "#E5E5E5",
    color: "black",
    border: "none",
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },




}));

const Dashboard = (props) => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const classes = useStyles();
  
  return (
    <Box className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>

          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Link to="/home">
          <img
            className={classes.logo}
            src="https://i.ibb.co/5jBnLZS/logo.png"
            alt=""
          />
        </Link>

        {loggedInUser.userType ?
          <List>
            <Link className={classes.link} to="/dashboard/adminServiceList">
              <ListItem button key="Creative Agency Admin service list">
                <ListItemIcon>
                  <Storage />
                </ListItemIcon>
                <ListItemText primary="Service List" />
              </ListItem>
            </Link>

            <Link className={classes.link} to="/dashboard/addService">
              <ListItem button key="Creative Agency Add service">
                <ListItemIcon>
                  <Add />
                </ListItemIcon>
                <ListItemText primary="Add Service" />
              </ListItem>
            </Link>

            <Link className={classes.link} to="/dashboard/makeAdmin">
              <ListItem button key="Make an admin">
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary="Make Admin" />
              </ListItem>
            </Link>
          </List>

          :
          <List>
          <Link className={classes.link} to="/dashboard/order/:id">
            <ListItem button key="Volunteer register list">
              <ListItemIcon>
                <ShoppingCart />
              </ListItemIcon>
              <ListItemText primary="Order" />
            </ListItem>
          </Link>

          <Link className={classes.link} to="/dashboard/services">
            <ListItem button key="Volunteer register list">
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Service list" />
            </ListItem>
          </Link>

          <Link className={classes.link} to="/dashboard/review">
            <ListItem button key="Add Review">
              <ListItemIcon>
                <SmsIcon />
              </ListItemIcon>
              <ListItemText primary="Review" />
            </ListItem>
          </Link>
        </List>


        }

        
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />

        {props.children}
        
      </main>
    </Box>
  );
};

export default Dashboard;
