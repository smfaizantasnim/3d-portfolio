import React from "react";
import ProjectBox from "./ProjectBox.jsx";
import Heading from "../../HelperComp/Heading.jsx";

const Projects = ({ ProjectData }) => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="My Works"
        subtitle="Elias's projects blend creativity and functionality, utilizing MERN stack. Sleek UI, dynamic features, and smooth performance define his impactful web applications."
      />

      {/* Project section  */}
      <div>
        <ProjectBox ProjectData={ProjectData} />
      </div>
    </div>
  );
};

export default Projects;
