import React from 'react';
import web from "../src/images/img.png"
import { NavLink } from 'react-router-dom';
import Common from "./Common.jsx";

const Home = () => {
return (
<>
<Common 
      name="Grow your Business today"
      imgsrc={web}
      visit="/service"
      btname="Get Started"/>
</>
);
};

export default Home;