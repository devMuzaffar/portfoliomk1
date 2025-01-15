"use client";
import {
  recentProjects,
  fullStackProjects,
  frontendProjects,
  allProjects,
} from "@/app/list/projectsList";
import Title from "../../ui/Title";
import ProjectCard from "./components/ProjectCard";
import ViewMore from "./components/ViewMore";
import FilterButton from "./components/FilterButton";
import { useState } from "react";

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonList = ["Recent", "Full Stack", "Frontend", "All"];
  const projectsList = [
    [...recentProjects],
    [...fullStackProjects],
    [...frontendProjects],
    [...allProjects],
  ];
  const ViewMoreButton = () =>
    projectsList[selectedIndex].length > 6 && (
      <ViewMore onClick={() => handleViewAll()} />
    );
  const expansionCondition = isExpanded ? "h-auto" : "h-[calc(100vh)] sm:h-[calc(100vh-05vh)] md:h-[calc(100vh-18vh)]";

  const handleViewAll = () => {
    if (isExpanded) {
      // document.getElementById("projects")?.scrollIntoView();
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="projects" className="section-padding" suppressHydrationWarning >
      <Title text={"Portfolio"} />

      {/* Filter Buttons */}
      <div className="w-full grid grid-cols-2 gap-4 pb-6 sm:grid-cols-4 md:flex md:justify-center">
        {buttonList.map((text, index) => (
          <FilterButton
            key={index}
            isSelected={index === selectedIndex}
            onClick={() => setSelectedIndex(index)}
          >
            {text}
          </FilterButton>
        ))}
      </div>

      {/* Projects List */}
      <div
        className={`animate grid gap-4 overflow-y-hidden sm:grid-cols-2 md:grid-cols-3 ${expansionCondition}`}
      >
        {/* Single Grid */}
        {projectsList[selectedIndex].map((item, index) => (
          <ProjectCard key={index} data={item} />
        ))}
      </div>
      <ViewMoreButton />
    </div>
  );
};

export default Projects;
