import React from "react";
import "./Hero.css";
import profile_img from "../../assets/My.png";
const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" style={{ borderRadius: "100%" }} />
      <h1>
        <span>I'm Kartik, </span>frontend developer{" "}
      </h1>
      <p>
        I am a professional frontend developer, With 5 years of experience.I can
        provide clean code and perfect pixel design
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
