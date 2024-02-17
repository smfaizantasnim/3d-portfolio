import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Heading from "../../HelperComp/Heading";

const Elias_try = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="https://www.canva.com/design/DAF9EvW6YUU/ico0G4FhJQ7h9U0Cre8PGg/edit?utm_content=DAF9EvW6YUU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
          <p className="mt-2 text-gray-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
        </div>
      </div>
    </div>
  );
};

export default Elias_try;
