import skillsList from "@/app/list/skillList";
import Title from "../../ui/Title";
import SkillCard from "./components/SkillCard";

const Skills = () => {
  return (
    <div id="skills" className="section-padding">
      {/* Title */}
      <Title text="Skills" />

      {/* Skills Block */}
      <div className="grid-custom">

        {/* Skill Card */}
        <SkillCard classNames={"area-a"} title={skillsList[0].title} icons={skillsList[0].icons}/>
        <SkillCard classNames={"area-b"} title={skillsList[1].title} icons={skillsList[1].icons}/>
        <SkillCard classNames={"area-c"} title={skillsList[2].title} icons={skillsList[2].icons}/>


      </div>
    </div>
  );
};

export default Skills;

// classNames={index === 0 ? "col-span-1 row-span-2": ""}
