import { LuExternalLink } from "react-icons/lu";
import ViewButton from "../components/ViewButton";
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
    <div className="animate h-full glass-effect rounded-lg flex flex-col justify-evenly gap-2 p-2 border-2 group hover:-translate-y-1 hover:bg-gray-200 hover:dark:bg-gray-800">
      {/* Top Image */}
      <div className="relative inset-0 w-full h-36 rounded-lg overflow-hidden">
        {data?.img ? (
          <Image
            className="animate object-cover group-hover:scale-110"
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
        <h2 className="text-xl font-medium">{data?.title || "Untitled Project"}</h2>

        <div className="flex gap-2 justify-between">
          {/* Tech Icons */}
          <div className="flex items-center gap-2">
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
                  <LuExternalLink size={14} />
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
