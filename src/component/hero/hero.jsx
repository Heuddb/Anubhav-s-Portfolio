import "./hero.css";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Typewriter } from "react-simple-typewriter";
import Resume from "../resumebtn/resumebtn";


function Hero() {
  return (
    <>
      <div id='home'className="hero_container">
        <div className="about">
          <h1 className="told"> Hello I'm, </h1>
          <h1  className="told">Anubhav Dubey.</h1>
          <h1 className="passion">i'm a frontend developer</h1>
          <h1 className="type">
            <span style={{fontSize:'30px'}}>
            <Typewriter
              words={[`I'm a Frontend Developer`]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
            />
            </span>
          </h1>
          <p id="per">I'm a frontend developer from India, I can designs interactive web pages using HTML, CSS, and JavaScript, ensuring responsive, user-friendly, and visually appealing interfaces. </p>
          <div className="hero_action">
            <div className="connect"><AnchorLink className='anchor-link' offset={50} href='#Contact'>CONTACT ME</AnchorLink></div>
            <Resume className="resumebtn" />
          </div>
        </div>
        <div className="profile" style={{marginBottom:'2%'}}>
          <img src="anubhav.png" alt="image can't load" />
        </div>
      </div>
    </>
  );
}

export default Hero;
