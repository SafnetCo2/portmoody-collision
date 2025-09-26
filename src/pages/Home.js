import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Gallery />
            <Testimonials />
            <Contact />
        </>
    );
};

export default Home;
