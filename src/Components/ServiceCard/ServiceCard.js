import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  card: {
    padding: "40px 0 20px",
    borderRadius: "6px",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "10px 10px 40px grey",
    },
  },
  title: {
    fontSize: "18px",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  serviceImage: {
    width: "100px",
  },
  CardContent: {
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  paragraph: {
    fontSize: "16px",
  },
});

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceCard = (props) => {
  const { _id, title, description, image } = props.service;
  const classes = useStyles();

  const [proxy, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 31, tension: 183, friction: 59 },
  }));

  return (
          <>
            <Grid className={classes.root} item sm={6} md={4}>
              <animated.div
                className="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: proxy.xys.interpolate(trans) }}
              >
                <Link className={classes.link} to={`/dashboard/order/${_id}`}>
                  <Card className={classes.card}>
                    <img
                      className={classes.serviceImage}
                      src={`data:image/jpeg;base64,${image.img}`}
                      alt=""
                    />
                    <CardContent>
                      <Typography
                        className={classes.title}
                        variant="h5"
                        component="h4"
                      >
                        {title}
                      </Typography>
                      <Typography
                        className={classes.paragraph}
                        variant="body2"
                        component="p"
                      >
                        {description.length > 50 &&
                          description.substring(0, 120 - 3) + "..."}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </animated.div>
            </Grid>
          </>
  );
};

export default ServiceCard;
