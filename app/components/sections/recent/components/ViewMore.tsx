import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

const ViewMore = () => {
  return (
    <div className="sm:col-span-2 md:col-span-3 flex items-center justify-end py-1 px-4">
      <div className="w-fit">
      <Link href={""}>
        <p className="animate text-secondary flex items-center gap-1 hover:translate-x-1">View More <LuArrowRight size={18} /></p>
      </Link>
      </div>
    </div>
  );
};

export default ViewMore;
