import React, { useState } from 'react';

const Contact = () => {

  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const InputEvent = (event) => {
    const {name, value} = event.target;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      }
    })
  }

  const formSubmit = (e) => {
      e.preventDefault();
      alert(`My name is ${data.fullname}. My Mobile number is ${data.phone} and email is ${data.email}. 
      Here is what I want to say ${data.message}`);
  }

    return ( 
      <>
      <div className="my-5">
          <h1 className="text-center"> Contact Us</h1>
      </div>

      <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-md-10 mx-auto formsize">
              <form onSubmit={formSubmit}>

                  <div class="mb-3">
                    <label for="exampleFormControlInput1">Full Name</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="exampleFormControlInput1" 
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                      placeholder="Enter your name" />
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlInput1">Phone Number</label>
                    <input 
                      type="number" 
                      class="form-control" 
                      id="exampleFormControlInput1" 
                      name="phonenumber"
                      value={data.phone}
                      onChange={InputEvent}
                      placeholder="Mobile Number" />
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input 
                      type="email" 
                      class="form-control" 
                      id="exampleFormControlInput1" 
                      name="Email"
                      value={data.email}
                      onChange={InputEvent}
                      placeholder="name@example.com" />
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea 
                      class="form-control" 
                      id="exampleFormControlTextarea1" 
                      rows="3"
                      name="message"
                      value={data.message }
                      onChange={InputEvent}>
                      </textarea>
                  </div>

                  <div className="col-12">
                      <button class="btn btn-outline-primary" type="submit">Submit form</button>
                  </div>
              </form>
            </div>
          </div>
      </div>
      </>
    );
  };

  export default Contact;