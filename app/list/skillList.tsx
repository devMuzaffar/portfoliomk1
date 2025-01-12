import {
  Firebase,
  Git,
  MongoDB,
  Netlify,
  Next,
  Node,
  Reactjs,
  ReduxActions,
  Sass,
  Tailwind,
  TypeScript,
  Vercel,
  Vite,
} from "@react-symbols/icons";
import Mui from "../components/ui/Mui";
import Bootstrap from "../components/ui/Bootstrap";
import HTML from "../components/ui/HTML";
import CSS from "../components/ui/CSS";
import Javascript from "../components/ui/Javascript";
import Figma from "../components/ui/Figma";
import { SiExpress, SiPostman } from "react-icons/si";
import VsCode from "../components/ui/VsCode";
import Chakra from "../components/ui/Chakra";

// Constant WxH for Custom Icons
const size = 32;

const skillsList = [
  // Frontend
  {
    title: "Frontend Development",
    icons: [
      { name: "React Js", icon: <Reactjs key={"react"} /> },
      { name: "Next Js", icon: <Next key={"next"} /> },
      { name: "Tailwind-css", icon: <Tailwind key={"tailwind"} /> },
      { name: "Material-ui", icon: <Mui size={size} key={"mui"} /> },
      { name: "Chakra", icon: <Chakra size={size} key={"chakra"} /> },
      { name: "Bootstrap", icon: <Bootstrap size={size} key={"bootstrap"} /> },
      {
        name: "Javascript",
        icon: <Javascript size={size} key={"javascript"} />,
      },
      { name: "Typescript", icon: <TypeScript key={"typescript"} /> },
      { name: "Redux Toolkit", icon: <ReduxActions key={"redux"} /> },
      { name: "Html", icon: <HTML size={size} key={"html"} /> },
      { name: "Css", icon: <CSS size={size} key={"css"} /> },
      { name: "Sass", icon: <Sass key={"sass"} /> },
      { name: "Vite", icon: <Vite key={"vite"} /> },
      { name: "Figma", icon: <Figma size={size} key={"figma"} /> },
    ],
  },

  // Backend
  {
    title: "Backend Development",
    icons: [
      { name: "Node.js", icon: <Node key={"node"} /> },
      { name: "MongoDB", icon: <MongoDB key={"mongo"} /> },
      { name: "Express.js", icon: <SiExpress size={size} /> },
      { name: "Firebase", icon: <Firebase key={"firebase"} /> },
    ],
  },

  // Tools
  {
    title: "Tools",
    icons: [
      { name: "VS Code", icon: <VsCode size={size} key={"vscode"} /> },
      { name: "Git", icon: <Git key={"git"} /> },
      { name: "Netlify", icon: <Netlify key={"netlify"} /> },
      { name: "Vercel", icon: <Vercel key={"vercel"} /> },
      {
        name: "Postman",
        icon: (
          <SiPostman
            key={"postman"}
            className="text-orange-700 bg-white rounded-full"
            size={size - 2}
          />
        ),
      },
    ],
  },
];

export default skillsList;
