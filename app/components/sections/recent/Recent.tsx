import recentProjects from "@/app/list/recentProjects";
import Title from "../../ui/Title";
import ProjectCard from "./components/ProjectCard";


const Recent = () => {
  return (
    <div className="section-padding">
      <Title text={"Recent Projects"} />

      {/* Recent Projects */}
      <div className="border-2 border-blue-500 grid grid-cols-3 gap-4">

        {/* Single Grid */}
        {recentProjects.map((item, index) => (
            <ProjectCard key={index} data={item}/>
        ))}
        
      </div>
    </div>
  );
};

export default Recent;
