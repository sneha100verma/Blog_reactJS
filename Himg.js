import "../components/himg.css"
import h from "../Assets/h.jpg"

import React from 'react'
import { Link } from "react-router-dom"

const Himg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src= {h}/>

        </div>
        <div className="content">
            <p>Hi , This is Sneha!</p>
            <h1>Web Developer</h1>
            

            <div className="btns">
                <Link to= "/Project" className="btn" >Project</Link>
                <Link to= "/Contact" className="btn">Contact</Link>
            </div>
        
</div>
    </div>
  );
};

export default Himg