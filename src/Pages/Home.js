import React from "react";
import ClientFeedback from "../Components/ClientFeedback/ClientFeedback";
import Footer from "../Components/Footer/Footer";
import HomeIntro from "../Components/HomeIntro/HomeIntro";
import OurClient from "../Components/OurClient/OurClient";
import Portfolio from "../Components/Portfolio/Portfolio";
import Service from "../Components/Service/Service";



const Home = () => {

  return (
          <>
            <HomeIntro></HomeIntro>
            <OurClient></OurClient>
            <Service></Service>
            <Portfolio></Portfolio>
            <ClientFeedback></ClientFeedback>
            <Footer></Footer>
          </>
  );
};

export default Home;
