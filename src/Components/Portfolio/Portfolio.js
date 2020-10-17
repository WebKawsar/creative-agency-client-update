import React from 'react';
import "./Portfolio.css";
import { Box, Container, makeStyles } from '@material-ui/core';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

// Fake data for Wsiper Slider
import slide1 from "../../creative-agency-resources/images/carousel-1.png";
import slide2 from "../../creative-agency-resources/images/carousel-2.png";
import slide3 from "../../creative-agency-resources/images/carousel-1.png";
import slide4 from "../../creative-agency-resources/images/carousel-1.png";
import slide5 from "../../creative-agency-resources/images/carousel-2.png";
import slide6 from "../../creative-agency-resources/images/carousel-1.png";


SwiperCore.use([Navigation, Pagination, A11y]);
const useStyles = makeStyles((theme) => ({
    root: {
        padding: "80px 0 50px",
        backgroundColor: "#3A4256"
    },
    firstSection: {
        marginBottom: "20px",
        overflow: "hidden"
    },
    title: {
      fontSize: "30px",
      textAlign: "center",
      color: "white",
      marginBottom: "30px"
    },
    highlight: {
        color: "#a4ca8d"
    },
    sliderImage: {
        width: "100%",
        height: "auto"
    }
   

}));


const Portfolio = () => {
    const classes = useStyles();

    return (
            <>
                <Box className={classes.root}>
                    <Container>
                        <Box className={classes.firstSection}>
                            <h3 className={classes.title}>Here are some of <span className={classes.highlight}>our works</span></h3>
                        </Box>
                        <Box>
                            <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >

                                <SwiperSlide><img className={classes.sliderImage} src={slide1} alt=""/></SwiperSlide>
                                <SwiperSlide><img className={classes.sliderImage} src={slide2} alt=""/></SwiperSlide>
                                <SwiperSlide><img className={classes.sliderImage} src={slide3} alt=""/></SwiperSlide>
                                
                                <SwiperSlide><img className={classes.sliderImage} src={slide4} alt=""/></SwiperSlide>
                                <SwiperSlide><img className={classes.sliderImage} src={slide5} alt=""/></SwiperSlide>
                                <SwiperSlide><img className={classes.sliderImage} src={slide6} alt=""/></SwiperSlide>
                                
                            </Swiper>
                        </Box>
                    </Container>
                </Box>

            </>
    );
};

export default Portfolio;