import recentProjects from "@/app/list/recentProjects";
import Title from "../../ui/Title";
import ProjectCard from "./components/ProjectCard";
import ViewMore from "./components/ViewMore";

const Recent = () => {
  return (
    <div id="projects" className="section-padding">
      <Title text={"Recent Projects"} />

      {/* Recent Projects */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Single Grid */}
        {recentProjects.map((item, index) => (
          <ProjectCard key={index} data={item} />
        ))}

        <ViewMore />
      </div>
    </div>
  );
};

export default Recent;
