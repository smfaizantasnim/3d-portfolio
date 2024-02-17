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
        subtitle="HTML5, CSS3, Vanila Js, React Js, Express Js, Spline, Tailwind CSS, Bootstrap, Daisy UI, Node js, Mongo DB, NEXT Js"
      />

      {/* Details section  */}

      <div className="mt-10 text-slate-500">
        <p>
        SM Elias is a skilled MERN stack developer, showcasing proficiency in MongoDB, Express.js, React, and Node.js. Dedicated to creating efficient, dynamic, and responsive web applications for optimal user experiences.
        </p>{" "}
        <br />
        <p>
        SM Elias, a dynamic MERN stack maestro, crafts seamless digital experiences. Fluent in MongoDB, Express.js, React, and Node.js, he ingeniously engineers cutting-edge solutions for a vibrant web landscape.
        </p>
        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
          <MdFacebook className="social-btn" />
          <AiFillInstagram className="social-btn" />
          <AiFillGithub className="social-btn" />
          <AiFillLinkedin className="social-btn" />
        </div>
        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
          <a href="https://drive.google.com/file/d/1TfCLgWz8eioIMdzQGpipGGWekyGv73EO/view?usp=sharing" className="primary-btn">
            Download Resume
          </a>
          <a href="https://www.facebook.com/salehuddinmohammadelias />
" className="outline-btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
