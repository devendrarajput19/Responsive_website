import React from 'react';
import web from "../src/images/img.png"

const Home = () => {
return (
<>
<section id="header" className="d-flex align-item-center">
    <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1> 
                        Grow Your Business <br></br>with 
                        <strong className="brand-name">
                            Dev-The Engineer
                        </strong> </h1>
                    <h2 className="my-3">We are team of Talented people with technical knowledge in different fields.</h2>
                    <h2 className="my-3">We are here to help you. Contact us for any kind of support. </h2>
                    <div className="mt-3">
                        <a href="" className="btn-get-started">
                            Get Started</a>
                    </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={web} className="img-fluid animated" alt="home img"/>
                </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>
);
};

export default Home;