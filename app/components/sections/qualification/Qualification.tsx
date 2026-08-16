import { experienceList } from "@/app/list/qualificationList";
import Title from "../../ui/Title";
import Education from "./components/Education";
import EducationMobile from "./components/EducationMobile";
import Experience from "./components/Experience";
import ExperienceMobile from "./components/ExperienceMobile";

const Qualification = () => {
  return (
    <section id="qualification" className="section-padding">
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
    </section>
  );
};

export default Qualification;
