import React from "react";
import personImg from "../../../assets/person2.png";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-secondary page-shadow">
        <div className="p-10  space-y-4">
          {/* image-container */}
          <div>
            <img src={personImg} alt="" className="w-[300px] mx-auto" />
          </div>
          {/* text-container */}
          <div>
            <div className="space-y-1 p-10 ">
              <p className="uppercase">Hey,</p>
              <p className="text-4xl md:text-2xl font-bold text-black/80">
                I'm SM Elias
              </p>
              <p className="text-black/75 text-left">Full Stack Developer</p>
              <p className="text-black/75 text-justify">
                <pre>
                  Elias's Full Stack MERN Developer. With sleek design and
                  interactive elements, it highlights his skill in crafting
                  modern, user-friendly web apps. Explore his innovative
                  projects, a visual testament to his passion for impactful
                  digital experiences.
                </pre>
              </p>

              <div className="flex flex-wrap justify-center items-center">
                <a
                  className="inline-block primary-btn "
                  href="mailto:e01711706710@gmail.com"
                  target="_blank"
                >
                  {" "}
                  Hire me
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
