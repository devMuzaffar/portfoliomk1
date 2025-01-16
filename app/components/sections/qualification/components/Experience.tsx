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

const Experience = ({ data }: dataProp) => {
  const renderLocationCompany =
    data?.location?.length === undefined || data?.location?.length < 1
      ? data?.company
      : `${data?.location} - ${data?.company}`;

  return (
    <div data-aos="fade-up" className="grid grid-cols-3 h-36 place-items-center group">
      {/* Left Card */}
      <div className="translate-x-32 relative place-self-end w-full my-auto">
        {/* Card */}
        <div className="glass-effect w-full border-[1px] rounded-md flex flex-col gap-1 py-2 px-6 shadow-sm border-gray-300 bg-gray-200 dark:bg-gray-900 dark:border-gray-700">
          {/* Job Title */}
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">{data?.name}</h2>
            <h2 className="text-sm">{data?.rank}</h2>
          </div>

          {/* Location - Company - Location Type */}
          <h3 className="text-sm font-medium">{renderLocationCompany}</h3>

          {/* Text */}
          <div className="flex items-center justify-between">
            <h4 className="text-xs italic">{data?.text}</h4>
            <p className="text-xs px-2 py-0.5 w-fit bg-blue-100 text-primary rounded-full">
              {data?.locationType}
            </p>
          </div>
        </div>

        {/* Arrow */}
        <div className="absolute top-1/2 -right-3 text-gray-600 dark:text-gray-300">
          <FaCaretRight size={18} />
        </div>
      </div>

      {/* Middle Line */}
      <MiddleLine />

      {/* Right Placeholder */}
      <div className="place-self-end w-full h-full -translate-x-40 flex items-center">
        {data?.date}
      </div>
    </div>
  );
};

export default Experience;
