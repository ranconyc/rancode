import React from "react";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import { truTheme, branTheme, travelTheme } from "../styles/themes";

const ProjectsPage = () => {
  return (
    <>
      <ProjectSection
        bgColor={truTheme.bgColor}
        imgSrc="/heroTru.png"
        title="TruCircle"
        slug="/projects/trucircle"
      />
      <ProjectSection
        bgColor={branTheme.bgColor}
        imgSrc="/heroBran.png"
        title="Branger"
        slug="/projects/Branger"
      />
      <ProjectSection
        bgColor={travelTheme.bgColor}
        imgSrc="/heroTravel.png"
        title="TravelMates"
        slug="/projects/travelmates"
      />
    </>
  );
};

export default ProjectsPage;
