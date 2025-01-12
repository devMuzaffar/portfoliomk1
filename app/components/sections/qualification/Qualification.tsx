import Title from "../../ui/Title";
import Experience from "./components/Experience";
import Education from "./components/Education";
import { experienceList } from "@/app/list/qualificationList";
import ExperienceMobile from "./components/ExperienceMobile";
import EducationMobile from "./components/EducationMobile";

const Qualification = () => {
  return (
    <div id="education" className="section-padding">
      <Title text="Education & Experience" />

      {/* Timeline - Desktop */}
      <div className="hidden md:block">
        {experienceList.map((item, index) => (
          <Experience key={index} data={item} />
        ))}
        <Education />
      </div>

      {/* Timeline - Mobile & Tablet */}
      <div className="md:hidden">
        {experienceList.map((item, index) => (
          <ExperienceMobile key={index} data={item} />
        ))}
        <EducationMobile
          data={{
            name: "Bachelor's in Information Technology",
            location: "Jamshoro - University of Sindh",
            text: "4 Years",
            date: "2018-2022",
          }}
        />
      </div>
    </div>
  );
};

export default Qualification;
