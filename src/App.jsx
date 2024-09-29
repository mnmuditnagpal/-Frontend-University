import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import ContactUs from "./Components/ContactUs/ContactUs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="What We Offer" subTitle="Our Program"/>
        <Programs />
        <About/>
        <Title title="Campus Photos" subTitle="Gallery"/>
        <Campus/>
        <Title subTitle="Testimonials" title="What Student Says"/>
        <Testimonials/>
        <Title subTitle="Contact Us" title="Get In Touch"/>
        <ContactUs/>
      </div>
    </div>
  );
};

export default App;
