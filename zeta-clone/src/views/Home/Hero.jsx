import React from 'react'
import Technology from './Technology';
import ProcessSlide from './ProcessSlide';
import Solutaion from './Solutaion';
import Benefits from './Benefits';
import Contact from './Contact';
import Career from './Career';
// import Randome from './Randome';
const Hero = () => {
  
  return (
    <div>
      {/* <Randome /> */}
      <Technology />
      <ProcessSlide />
      <Solutaion />
      <Benefits />
      <Contact />
      <Career />
    </div>
  )
}

export default Hero;