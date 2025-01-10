import Image from "next/image";
import Title from "../../ui/Title";

const Skills = () => {
  return (
    <div id="skills" className="section-padding h-screen border-2 border-red-500">

        {/* Title */}
        <Title text="Skills"/>

        {/* Skills Block */}
        <div className="grid grid-cols-2">

          {/* Grid 1 */}
          <div className="border-2 flex flex-col justify-center items-center gap-2">

            <div><Image width={64} height={64} src="/assets/skills/frontend.png" alt="" /></div>

            <div className="text-lg">
              <p>Frontend Development</p>
            </div>

            <div className="flex flex-wrap gap-2 items-center justify-center">

              {Array.from({length: 20}).map((_, index) => (
                <div key={index} className="text-sm bg-gray-500 rounded-full px-4 py-1 text-white">React Js</div>
              ))}

              

            </div>

          </div>

        </div>

    </div>
  )
}

export default Skills