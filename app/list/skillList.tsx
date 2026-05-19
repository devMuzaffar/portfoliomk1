import {
  Firebase,
  Git,
  MongoDB,
  Netlify,
  Next,
  Node,
  Reactjs,
  ReduxActions,
  Supabase,
  Tailwind,
  TypeScript,
  Vercel
} from "@react-symbols/icons";
import { SiExpress, SiPostman, SiShadcnui } from "react-icons/si";
import Bootstrap from "../components/ui/Bootstrap";
import Chakra from "../components/ui/Chakra";
import CSS from "../components/ui/CSS";
import Figma from "../components/ui/Figma";
import HTML from "../components/ui/HTML";
import Javascript from "../components/ui/Javascript";
import Mui from "../components/ui/Mui";
import Nuxt from "../components/ui/Nuxt";
import SvelteKit from "../components/ui/SvelteKit";
import VsCode from "../components/ui/VsCode";
import Vue from "../components/ui/Vue";

// Constant WxH for Custom Icons
const size = 32;
const sizeProp = {
  style: { width: size },
};

const skillsList = [
  // Frontend
  {
    title: "Frontend Development",
    icons: [
      // Core frontend stack first
      { name: "React Js", icon: <Reactjs {...sizeProp} key={"react"} /> },
      { name: "Next Js", icon: <Next {...sizeProp} key={"next"} /> },
      { name: "Typescript", icon: <TypeScript {...sizeProp} key={"typescript"} /> },
      { name: "Javascript", icon: <Javascript size={size} key={"javascript"} /> },

      // Modern ecosystem
      { name: "Vue", icon: <Vue size={size} key={"vue"} /> },
      { name: "Nuxt", icon: <Nuxt size={size} key={"nuxt"} /> },
      { name: "Redux", icon: <ReduxActions {...sizeProp} key={"redux"} /> },

      // Styling/UI
      {
        name: "Tailwind CSS",
        icon: <Tailwind {...sizeProp} key={"tailwind"} />,
      },
      { name: "ShadCN", icon: <SiShadcnui size={size} key={"shadcn"} /> },
      { name: "Material UI", icon: <Mui size={size} key={"mui"} /> },
      { name: "Chakra UI", icon: <Chakra size={size} key={"chakra"} /> },
      { name: "Bootstrap", icon: <Bootstrap size={size} key={"bootstrap"} /> },

      // Fundamentals
      { name: "Html", icon: <HTML size={size} key={"html"} /> },
      { name: "Css", icon: <CSS size={size} key={"css"} /> },

      // Secondary / less important
      { name: "Svelte", icon: <SvelteKit size={size} key={"svelte"} /> },
      { name: "SvelteKit", icon: <SvelteKit size={size} key={"sveltekit"} /> },
      { name: "Figma", icon: <Figma size={size} key={"figma"} /> },
    ],
  },

  // Backend
  {
    title: "Backend Development",
    icons: [
      { name: "Node.js", icon: <Node {...sizeProp} key={"node"} /> },
      { name: "MongoDB", icon: <MongoDB {...sizeProp} key={"mongo"} /> },
      { name: "Express.js", icon: <SiExpress size={size} /> },
      { name: "Firebase", icon: <Firebase {...sizeProp} key={"firebase"} /> },
      { name: "Supabase", icon: <Supabase {...sizeProp} key={"supabase"} /> },
    ],
  },

  // Tools
  {
    title: "Tools",
    icons: [
      { name: "VS Code", icon: <VsCode size={size} key={"vscode"} /> },
      { name: "Git", icon: <Git {...sizeProp} key={"git"} /> },
      { name: "Netlify", icon: <Netlify {...sizeProp} key={"netlify"} /> },
      { name: "Vercel", icon: <Vercel {...sizeProp} key={"vercel"} /> },
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
