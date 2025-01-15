import { Firebase, Next, Reactjs, Sass, Tailwind } from "@react-symbols/icons";
import { SiMui } from "react-icons/si";
import FramerMotion from "../components/ui/FramerMotion";


// Recent Projects
export const recentProjects = [
  // 1st
  {
    img: "/assets/recents/pts.png",
    title: "PTS Education",
    githubLink: "https://github.com/devMuzaffar/pts-web",
    siteLink: "https://ptseducation.vercel.app/",
    icons: [
      <Next key={"github"} />,
      <Tailwind key={"tailwind"} />,
      <Reactjs key={"react"} />,
      <SiMui key={"mui"} className="text-blue-500" />,
      <FramerMotion key={"framermotion"} />,
    ],
  },

  // 2nd
  {
    img: "/assets/recents/chaajao.png",
    title: "Chaajao Clone",
    githubLink: "https://github.com/devMuzaffar/chaajaonext/",
    siteLink: "https://chaajaonext.vercel.app/",
    icons: [
      <Next key={"github"} />,
      <Tailwind key={"tailwind"} />,
      <Reactjs key={"react"} />,
      <SiMui key={"mui"} className="text-blue-500" />,
      <FramerMotion key={"framermotion"} />,
    ],
  },

  // 3rd
  {
    img: "/assets/recents/chat.jpeg",
    title: "Chat App",
    githubLink: "https://github.com/devMuzaffar/React_chat",
    siteLink: "https://reactchatmk.netlify.app/",
    icons: [
      <Reactjs key={"react"} />,
      <Firebase key={"firebase"} />,
      <Sass key={"sass"} />,
    ],
  },

  // 4th
  {
    img: "/assets/recents/blog.png",
    title: "Blog App",
    githubLink: "https://github.com/devMuzaffar/React_Blog/",
    siteLink: "https://myblogmk1.netlify.app/",
    icons: [<Reactjs key={"react"} />, <Firebase key={"firebase"} />],
  },

  // 5th
  {
    img: "/assets/recents/weather.png",
    title: "Weather App",
    githubLink: "https://github.com/devMuzaffar/weather_app",
    siteLink: "https://weatherappmk1.netlify.app/",
    icons: [
      <Reactjs key={"react"} />,
    ],
  },

  // 6th
  {
    img: "/assets/recents/gpt3.jpeg",
    title: "GPT-3 Web",
    githubLink: "https://github.com/devMuzaffar/GPT3Web",
    siteLink: "https://gpt3mk.netlify.app/",
    icons: [
      <Reactjs key={"react"} />,
    ],
  },
];



// Full Stack Projects
export const fullStackProjects = [

  // Start
  {
    img: "/assets/recents/pts.png",
    title: "PTS Education",
    githubLink: "https://github.com/devMuzaffar/pts-web",
    siteLink: "https://ptseducation.vercel.app/",
    icons: [
      <Next key={"github"} />,
    ],
  },

];


// TODO: add Full Stack, Frotnend and all List
// TODO: Add View all button to expand Frotnend list only (Intitial Height to Height full)

// TODO: add AOS or Framer Motion to Each section
// TODO: Add Backgorund video
// TODO: Add loading option