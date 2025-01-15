import { recentProjects } from "@/app/list/projectsList";
import Title from "../../ui/Title";
import ProjectCard from "./components/ProjectCard";
import ViewMore from "./components/ViewMore";
import FilterButton from "./components/FilterButton";

const Projects = () => {
  return (
    <div id="projects" className="section-padding">
      <Title text={"Portfolio"} />


      {/* Filter Buttons */}
      <div className="w-full grid grid-cols-2 gap-4 pb-6 sm:grid-cols-4 md:flex md:justify-center">
        <FilterButton isSelected={true}>Recents</FilterButton>
        <FilterButton>Full Stack</FilterButton>
        <FilterButton>Frontend</FilterButton>
        <FilterButton>All</FilterButton>
            
      </div>

      {/* Projects List */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        
        {/* Single Grid */}
        {recentProjects.map((item, index) => (
          <ProjectCard key={index} data={item} />
        ))}

        <ViewMore />
        
      </div>
    </div>
  )
}

export default Projects