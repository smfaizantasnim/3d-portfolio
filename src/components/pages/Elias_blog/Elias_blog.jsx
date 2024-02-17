import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Heading from "../../HelperComp/Heading";

const Elias_blog = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="Elias Blogs"
        subtitle="Dive into the world of Elias Blogs, where captivating narratives meet insightful musings. Explore a tapestry of thought-provoking content curated by Elias himself."
      />

      {/* Details section  */}

      <div className="mt-10 text-slate-500">
        <p>
          Embark on a journey of digital excellence with SM Elias, the visionary
          MERN stack maestro. With mastery in MongoDB, Express.js, React, and
          Node.js, he pioneers dynamic solutions, shaping the future of the web.
        </p>{" "}
        <br />
        <p>
          Step into the realm of digital innovation with SM Elias, a master of
          the MERN stack. With expertise in MongoDB, Express.js, React, and
          Node.js, he crafts dynamic, cutting-edge solutions that redefine the
          web landscape
        </p>
        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
          <a
            href="https://www.facebook.com/salehuddinmohammadelias"
            target="_blank"
          >
            <MdFacebook className="social-btn" />
          </a>
          <a
            href="https://www.instagram.com/your-instagram-profile"
            target="_blank"
          >
            <AiFillInstagram className="social-btn" />
          </a>
          <a href="https://github.com/smfaizantasnim" target="_blank">
            <AiFillGithub className="social-btn" />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
          >
            <AiFillLinkedin className="social-btn" />
          </a>
        </div>
        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
          <a
            href="https://drive.google.com/file/d/1TfCLgWz8eioIMdzQGpipGGWekyGv73EO/view?usp=sharing"
            className="primary-btn"
          >
            Download Resume
          </a>
          <a
            href="https://www.facebook.com/salehuddinmohammadelias />
"
            className="outline-btn"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Elias_blog;
