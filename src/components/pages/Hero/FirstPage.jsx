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
            <div className="space-y-3">
              <p className="uppercase">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80">
                I'm SM Elias
              </p>
              <p className="text-black/75 text-left">Full Stack Developer</p>
              <p className="text-black/75">
              Elias's portfolio page is a captivating showcase of his diverse skills as a Full Stack MERN Developer. With a sleek design and interactive elements, it brilliantly highlights his proficiency in crafting modern, user-friendly web applications. Explore a visual journey of innovative projects, demonstrating his passion for creating impactful digital experiences.
              </p>
              <a
                className="inline-block primary-btn "
                href="mailto:Tq6cM@example.com"
              >
                {" "}
                Hire me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
