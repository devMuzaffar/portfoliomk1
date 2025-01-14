import { FaCaretRight } from "react-icons/fa";
import MiddleLine from "./MiddleLine";

interface dataProp {
  data?: experienceProps;
}

interface experienceProps {
  name?: string;
  location: string | undefined;
  company?: string;
  locationType?: string;
  text?: string;
  date?: string;
  rank?: string;
}

const ExperienceMobile = ({ data }: dataProp) => {
  const renderLocationCompany =
    data?.location?.length === undefined || data?.location?.length < 1
      ? data?.company
      : `${data?.location} - ${data?.company}`;
  return (
    <div className="flex h-full my-4 sm:my-0 sm:h-32 group">
      {/* Left Card */}
      <div className="relative w-full my-auto">
        {/* Card */}
        <div className="glass-effect w-full border-[1px] rounded-md flex flex-col gap-1 py-2 px-6 shadow-sm border-gray-300 bg-gray-200 dark:bg-gray-900 dark:border-gray-700">
          {/* Job Title */}
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex items-center gap-2">
              <h2 className="text-sm sm:text-lg font-semibold">{data?.name}</h2>
              <h2 className="text-sm">{data?.rank}</h2>
            </div>
            <h2 className="text-xs sm:text-sm">{data?.date}</h2>
          </div>

          {/* Location - Company - Location Type */}
          <h3 className="text-xs sm:text-sm font-medium">
            {renderLocationCompany}
          </h3>

          {/* Time */}
          <div className="flex items-center justify-between">
            <h4 className="text-xs italic">{data?.text}</h4>
            <p className="text-xs px-2 py-0.5 w-fit bg-blue-100 text-primary rounded-full">
              {data?.locationType}
            </p>
          </div>
        </div>

        {/* Arrow */}
        <div className="absolute top-1/2 -right-3 text-gray-600 dark:text-gray-300 hidden sm:block">
          <FaCaretRight size={18} />
        </div>
      </div>

      {/* Middle Line */}
      <div className="w-80 hidden sm:block">
        <MiddleLine />
      </div>
    </div>
  );
};

export default ExperienceMobile;
