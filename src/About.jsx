import React from 'react';
import web from "../src/images/s8.png"
import { NavLink } from 'react-router-dom';
import Common from "./Common.jsx";

const About = () => {
return (
<>
    <Common 
      name="Welcome to About Page"
      imgsrc={web}
      visit="/contact"
      btname="Contact now"/>
</>
);
};

export default About;