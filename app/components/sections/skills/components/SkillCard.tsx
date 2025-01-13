import { JSX } from "react";

interface skillProps {
  title: string | null;
  icons: iconPropType[] | null;
  classNames?: string | null;
}

interface iconPropType {
  name: string | null;
  icon: JSX.Element | null;
}

const SkillCard = ({ title, icons, classNames }: skillProps) => {
  return (
    <div
      className={`animate glass-effect rounded-xl flex flex-col p-2 gap-2 border-[1px] border-gray-400 dark:border-gray-600 hover:shadow-lg hover:border-primary hover:dark:border-primary hover:shadow-primary/20 hover:dark:shadow-primary/30 hover:-translate-y-1 ${classNames}`}
    >
      {/* Title */}
      <h2 className="font-medium text-xl text-center py-2">{title}</h2>

      {/* List */}
      <div className="grid grid-cols-3 items-center px-2 pb-2 gap-2">
        {icons?.map((item, index) => (
          <div
            key={index}
            className="h-full border-[1px] border-gray-300 bg-white rounded-xl flex flex-col gap-2 items-center justify-center p-2 dark:border-gray-600 dark:bg-gray-950"
          >
            <div className="w-8 flex items-center justify-center">
              {item.icon}
            </div>
            <h2 className="text-xs sm:text-sm select-none">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
