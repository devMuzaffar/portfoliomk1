import { LuExternalLink } from "react-icons/lu";
import ViewButton from "../components/ViewButton";
import Image from "next/image";
import { Github } from "@react-symbols/icons";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

interface dataType {
  data: {
    img: string | StaticImport;
    title: string | null;
    icons: React.ReactNode[] | null;
    githubLink: Url | null;
    siteLink: Url | null;
  } | null;
}

const ProjectCard = ({ data }: dataType) => {
  return (
    <div className="animate h-full glass-effect rounded-lg flex flex-col justify-evenly gap-2 p-2 border-2 group hover:-translate-y-1 hover:bg-gray-200 hover:dark:bg-gray-800">
      {/* Top Image */}
      <div className="relative inset-0 w-full h-36 rounded-lg overflow-hidden">
        <Image
          className="animate object-cover group-hover:scale-110"
          src={data.img}
          fill
          alt=""
        />
      </div>

      {/* Bottom Block */}
      <div className="flex flex-col px-2 gap-4">
        {/* Title */}
        <h2 className="text-xl font-medium">PTS Education</h2>

        <div className="flex gap-2 justify-between">
          {/* Tech Icons */}
          <div className="flex items-center gap-2">
            {data?.icons &&
              data.icons.map((icon: React.ReactNode, index: number) => (
                <div key={index} className="rounded-full bg-gray-300 p-2 w-8">
                  {icon}
                </div>
              ))}
          </div>

          {/* View Buttons */}
          <div className="flex gap-2 items-center">
            <Link href={data?.githubLink} target="_blank">
              <ViewButton label="Github Repo">
                <Github />
              </ViewButton>
            </Link>
            <Link href={data?.siteLink} target="_blank">
              <ViewButton label="View Live Site">
                <LuExternalLink size={14} />
              </ViewButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
