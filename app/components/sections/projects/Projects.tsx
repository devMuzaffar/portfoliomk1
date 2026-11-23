"use client";

// Imports
import {
  frontendProjects,
  fullStackProjects,
  recentProjects,
} from "@/app/list/projectsList";
import { AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import Title from "../../ui/Title";
import FilterButton from "./components/FilterButton";
import ProjectCard, { type ProjectData } from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import ViewMore from "./components/ViewMore";
import MotionCard from "./ui/MotionCard";

const Projects = () => {
  // State
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isViewClicked, setIsViewClicked] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);
  const buttonList = ["Featured", "Full Stack", "Frontend"];
  const projectsList = [
    [...recentProjects],
    [...fullStackProjects],
    [...frontendProjects],
  ];
  const handleCloseProject = useCallback(() => setActiveProject(null), []);
  const handleViewAll = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      document.getElementById("projects")?.scrollIntoView();
    }
  };

  // HOC ViewMore button
  const ViewMoreButton = () =>
    projectsList[selectedIndex].length > 6 && (
      <ViewMore onClick={() => handleViewAll()} isViewClicked={isViewClicked}  setIsViewClicked={setIsViewClicked} />
    );

  // Limit imposed List
  const projectsListLimited = projectsList[selectedIndex].slice(
    0,
    isExpanded ? projectsList[selectedIndex].length : 6
  );

  return (
    <section
      id="projects"
      className="section-padding"
      suppressHydrationWarning
    >
      <Title text={"Portfolio"} />

      {/* Filter Buttons */}
      <div className="w-full grid grid-cols-3 gap-4 pb-6 sm:grid-cols-3 md:flex md:justify-center">
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
      <div data-aos="fade-up" className="flex flex-col gap-2">
        {/* Single Grid with Motion */}
        <MotionCard
          list={projectsList[selectedIndex]}
          className="animate grid gap-4 sm:grid-cols-2 md:grid-cols-3"
        >
          {projectsListLimited.map((item, index) => (
            <ProjectCard key={index} data={item} onOpen={setActiveProject} />
          ))}
        </MotionCard>

        {/* View More */}
        <ViewMoreButton />
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            key="project-modal"
            project={activeProject}
            onClose={handleCloseProject}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
