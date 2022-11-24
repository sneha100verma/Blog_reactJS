import "./Footer.css"
import React from "react"

import {FaHome , FaPhone  , FaMailBulk, FaInstagram, FaLinkedin}  from "react-icons/fa"
 

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">
        <div className="location">
                <FaHome  size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
            <div>
            <p>Indiapuram , Ghaziabad</p>
            <p>Uttarpradesh</p>
        </div>
        </div>

        <div className="phone">
            <h4> <FaPhone size={20} style = {{color:"#fff" ,marginRight:"2rem"}}/>
            123-456-7891</h4>
           
        </div>
        <div className="email">
            <h4> <FaMailBulk size={20} style = {{color:"#fff" ,marginRight:"2rem"}}/>
            sneha08verma@gmail.com</h4>
           
        </div>
        </div>
        
        <div className="right">
          <h4>About the company</h4>
          <p>I don't  own a company yet but i wish for the same.
            Although You can connect me on social media.</p>
          <div className="social">

          <FaInstagram size={22} style = {{color:"#fff" ,marginRight:"1rem"}}/>
          <FaLinkedin size={22} style = {{color:"#fff" ,marginRight:"1rem"}}/>


          </div>

          </div>
        </div>
    </div>

  
  );
}

export default Footer