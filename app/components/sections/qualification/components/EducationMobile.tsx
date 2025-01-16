import { FaCaretRight } from "react-icons/fa";
import MiddleLine from "./MiddleLine";

interface dataProp {
  data?: experienceProps;
}

interface experienceProps {
  name?: string;
  location: string | undefined;
  company?: string;
  text?: string;
  date?: string;
}

const EducationMobile = ({ data }: dataProp) => {
  return (
    <div data-aos="fade-up" className="flex h-full sm:h-32 group">
      {/* Left Card */}
      <div className="relative w-full my-auto">
        {/* Card */}
        <div className="glass-effect w-full border-[1px] rounded-md flex flex-col gap-1 py-2 px-6 shadow-sm border-gray-300 bg-gray-200 dark:bg-gray-900 dark:border-gray-700">
          {/* Job Title */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-sm sm:text-lg font-semibold">{data?.name}</h2>
            </div>
            <h2 className="text-xs sm:text-sm">{data?.date}</h2>
          </div>

          {/* Location */}
          <h3 className="text-xs sm:text-sm font-medium">{data?.location}</h3>

          {/* Text */}
          <h4 className="text-xs italic">{data?.text}</h4>
        </div>

        {/* Arrow */}
        <div className="absolute top-1/2 -right-3 text-gray-600 dark:text-gray-300 hidden sm:block">
          <FaCaretRight size={18} />
        </div>
      </div>

      {/* Middle Line */}
      <div className="w-80 hidden sm:block">
        <MiddleLine isEducation={true} />
      </div>
    </div>
  );
};

export default EducationMobile;
