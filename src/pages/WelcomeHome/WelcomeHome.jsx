import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/WelcomeHome/Footer";
import ShortInstruction from "../../components/WelcomeHome/ShortInstruction";
import TopBaner from "../../components/WelcomeHome/TopBaner";

const WelcomeHome = () => {
  return (
    <>
      <Header />
      <TopBaner />
      <ShortInstruction />
      <Footer />
    </>
  );
};

export default WelcomeHome;
