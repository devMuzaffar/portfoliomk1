import { FaCaretLeft } from "react-icons/fa";
import MiddleLine from "./MiddleLine";

const Education = () => {
  return (
    <div className="grid grid-cols-3 h-36 place-items-center group">
      {/* Left Placeholder */}
      <div className="place-self-end w-full h-full translate-x-40 flex items-center justify-end text-sm">
        2018-2022
      </div>

      {/* Middle Line */}
      <MiddleLine isEducation={true} />

      {/* Right Card */}
      <div className="glass-effect -translate-x-32 relative place-self-end w-full my-auto">
        <div className="absolute top-1/2 -left-3 text-gray-600 dark:text-gray-300">
          <FaCaretLeft size={18} />
        </div>
        <div className="glass-effect border-[1px] rounded-md shadow-sm border-gray-300 bg-gray-200 flex flex-col gap-1 py-2 px-6 dark:bg-gray-900 dark:border-gray-700">
          {/* Job Title */}
          <h2 className="text-lg font-semibold">
            Bachelor&apos;s in Information Technology (BSIT)
          </h2>

          {/* Location & Institute name */}
          <h3 className="text-sm font-medium">
            Jamshoro - University of Sindh
          </h3>

          {/* text */}
          <p className="text-xs italic">4 - Years</p>

          
        </div>
      </div>
    </div>
  );
};

export default Education;
