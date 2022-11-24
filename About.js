import React from 'react'
import Navbar from "../components/Navbar"

import Footer from "../components/Footer"
import Heroimg2 from '../components/Heroimg2'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="About" text="I may be a friendly creature on Earth"/>
      <Footer/>
    </div>
  )
}

export default About