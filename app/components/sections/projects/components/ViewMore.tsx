"use client";
import { LuArrowRight } from "react-icons/lu";
const ViewMore = ({ onClick }: { onClick?: () => void }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className="sm:col-span-2 md:col-span-3 flex items-center justify-end py-1 px-4"
      onClick={handleClick}
    >
      <div className="w-fit">
        <p className="animate cursor-pointer text-secondary flex items-center gap-1 hover:translate-x-1">
          View More <LuArrowRight size={18} />
        </p>
      </div>
    </div>
  );
};

export default ViewMore;
