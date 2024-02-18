import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Heading from "../../HelperComp/Heading";

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="About"
        subtitle="Meet SM Elias, your gateway to digital excellence. As a seasoned MERN stack virtuoso, I specialize in crafting dynamic solutions that redefine the web. With expertise in MongoDB, Express.js, React, and Node.js, I'm committed to architecting seamless digital experiences that elevate your online presence."
      />

      {/* Details section  */}

      <div className="mt-10 text-slate-500">
        <p className="text-justify">
        Embark on a journey of digital excellence with SM Elias, the visionary MERN stack maestro. With mastery in MongoDB, Express.js, React, and Node.js, he pioneers dynamic solutions, shaping the future of the web.
        </p>{" "}
        <br />
        <p className="text-justify">
        Step into the realm of digital innovation with SM Elias, a master of the MERN stack. With expertise in MongoDB, Express.js, React, and Node.js, he crafts dynamic, cutting-edge solutions that redefine the web landscape
        </p>
        {/* Social Links */}
        {/* <div className="flex space-x-4 mt-10">
          <MdFacebook className="social-btn" />
          <AiFillInstagram className="social-btn" />
          <AiFillGithub className="social-btn" />
          <AiFillLinkedin className="social-btn" />
            </div> */}

<div className="flex flex-wrap justify-center gap-4 mt-10">
        <a
          href="https://www.facebook.com/salehuddinmohammadelias"
          target="_blank"
          className="social-btn"
        >
          <MdFacebook />
        </a>
        <a
          href="https://www.instagram.com/your-instagram-profile"
          target="_blank"
          className="social-btn"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://github.com/smfaizantasnim"
          target="_blank"
          className="social-btn"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          className="social-btn"
        >
          <AiFillLinkedin />
        </a>
      </div>
      {/* Button Links */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
        <a
          href="https://drive.google.com/file/d/1TfCLgWz8eioIMdzQGpipGGWekyGv73EO/view?usp=sharing"
          className="primary-btn"
        >
          Download Resume
        </a>
        <a
          href="https://www.facebook.com/salehuddinmohammadelias"
          target="_blank"
          className="outline-btn"
        >
          Contact
        </a>
      </div>
      </div>
    </div>
  );
};

export default About;
