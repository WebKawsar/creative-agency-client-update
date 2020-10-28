import React, { useContext } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";
import { Add, ShoppingCart, Storage } from "@material-ui/icons";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ListIcon from "@material-ui/icons/List";
import SmsIcon from "@material-ui/icons/Sms";
import { Avatar } from "@material-ui/core";
import { deepPurple  } from '@material-ui/core/colors';




const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: "#E5E5E5",
    color: "black",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "#E5E5E5",
      color: "black",
      border: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  logo: {
    height: "40px",
    margin: "18px 16px",
  },
  menuBar: {
    flexGrow: 1
  },
  orange: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },


}));

const Dashboard = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.menuBar} variant="h6" noWrap>
            Dashboard
          </Typography>
          <Avatar className={classes.orange} src={loggedInUser.img} alt="Admin">A</Avatar>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <Link to="/home">
              <img
                className={classes.logo}
                src="https://i.ibb.co/5jBnLZS/logo.png"
                alt=""
              />
            </Link>

            {loggedInUser.userType ? (
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
            ) : (
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
            )}
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <Link to="/home">
              <img
                className={classes.logo}
                src="https://i.ibb.co/5jBnLZS/logo.png"
                alt=""
              />
            </Link>

            {loggedInUser.userType ? (
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
            ) : (
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
            )}
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {
          props.children
        }
      </main>
    </div>
  );
};

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
