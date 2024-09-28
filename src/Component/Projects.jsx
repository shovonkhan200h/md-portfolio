import React from "react";
import { TabsDemo } from "./ui/Project/ProjectComponent";
import { FeaturesSectionDemo } from "./ui/Project/OtherProjects";



const Projects = () => {
  return (
    <section className="container mx-auto">
      <h2 className="text-[32px] text-ash">
        <span className="text-nion text-3xl">03.</span> Projects
      </h2>
    
       <TabsDemo/>
       <FeaturesSectionDemo/>
      
    </section>
  );
};

export default Projects;
