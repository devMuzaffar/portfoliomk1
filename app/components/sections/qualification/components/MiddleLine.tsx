import { LuBriefcaseBusiness, LuGraduationCap } from "react-icons/lu";

const MiddleLine = ({ isEducation = false }) => {
  const Icon = () =>
    isEducation ? (
      <LuGraduationCap size={24} />
    ) : (
      <LuBriefcaseBusiness size={24} />
    );

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center z-0">
      {/* Line Start */}
      <div className="h-full w-[2px] bg-gray-200" />

      {/* Icon */}
      <div className="animate glass-effect p-4 mt-1 rounded-full w-fit bg-gray-200 shadow-sm shadow-gray-400 text-gray-800 dark:text-gray-300 group-hover:dark:shadow-md group-hover:text-primary group-hover:dark:text-white group-hover:shadow-primary group-hover:dark:shadow-primary">
        <Icon />
      </div>

      {/* Line End */}
      <div className="h-full w-[2px] bg-gray-200" />
    </div>
  );
};

export default MiddleLine;
