import React from "react";
import Header from "../components/navbar/Index";
import HeroSection from "../components/heroSection/index";
import NewsLine from "../components/newsLine/Index";
import OurService from "../components/ourService/Index";
import Countrys from "../components/countrys/Index";
import ContactUs from "../components/contactUs/Index";
import Footer from "../components/footer/Footer";

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        gap: "40px",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Header />
      <HeroSection />
      {/* <NewsLine /> */}
      <OurService />
      <Countrys />
      <ContactUs />
      <Footer />
    </div>
  );
}
