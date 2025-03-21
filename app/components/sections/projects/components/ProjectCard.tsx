import { LuExternalLink } from "react-icons/lu";
import ViewButton from "./ViewButton";
import Image from "next/image";
import { Github } from "@react-symbols/icons";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ProjectData {
  img: string | StaticImport;
  title: string | null;
  icons: React.ReactNode[] | null;
  githubLink: string | null;
  siteLink: string | null;
}

interface ProjectCardProps {
  data: ProjectData | null;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <div className="animate border-[1px] border-gray-400 glass-effect max-h-min rounded-xl flex flex-col justify-evenly gap-2 p-2 hover:-translate-y-1 hover:border-primary dark:border-gray-700 hover:dark:border-primary hover:bg-primary/10 hover:dark:bg-gray-800">
      {/* Top Image */}
      <div className="relative inset-0 w-full h-36 rounded-md border-[1px] border-gray-400 overflow-hidden">
        {data?.img ? (
          <Image
            className="animate object-cover"
            src={data.img}
            fill
            alt={data.title || "Project Image"}
          />
        ) : (
          <div className="bg-gray-300 h-full flex items-center justify-center">
            <span>No Image</span>
          </div>
        )}
      </div>

      {/* Bottom Block */}
      <div className="flex flex-col px-2 gap-4">
        {/* Title */}
        <h2 className="text-xl font-medium tracking-wide">
          {data?.title || "Untitled Project"}
        </h2>

        <div className="flex flex-wrap gap-2 justify-between">
          {/* Tech Icons */}
          <div className="flex flex-wrap items-center gap-2">
            {data?.icons?.length
              ? data.icons.map((icon, index) => (
                  <div key={index} className="rounded-full bg-gray-300 p-2 w-8">
                    {icon}
                  </div>
                ))
              : "No icons available"}
          </div>

          {/* View Buttons */}
          <div className="flex gap-2 items-center">
            {/* Seperator */}
            <div className="hidden h-5/6 w-[1px] bg-gray-200 dark:bg-gray-800 md:block"/>
            {/* Button Icons */}
            {data?.githubLink && (
              <Link href={data.githubLink} target="_blank">
                <ViewButton label="Github Repo">
                  <Github />
                </ViewButton>
              </Link>
            )}
            {data?.siteLink && (
              <Link href={data.siteLink} target="_blank">
                <ViewButton label="View Live Site">
                  <LuExternalLink size={16} />
                </ViewButton>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
