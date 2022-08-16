import React, { Fragment } from "react";
import Header from "../header/Header";

import HeroSection from "../hero-section/HeroSection";
import About from '../about/About'
import Services from "../services/Services";
import Experience from "../experience/Experience";
import Portfolio from "../portfolio/Portfolio";
import Testimonial from "../testimonial/Testimonial";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
const Layout =()=>{
    return(
    <Fragment>
     <Header /> 
     <HeroSection/>
     <About/>
     <Services/>
     <Experience/>
     <Portfolio/>
     <Testimonial/>
     <Contact/>
     {/* <Footer/> */}
    </Fragment>
    )
}
export default Layout