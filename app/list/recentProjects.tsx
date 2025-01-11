import { Firebase, Next, Reactjs, Sass, Tailwind } from "@react-symbols/icons";
import { SiMui } from "react-icons/si";
import FramerMotion from "../components/ui/FramerMotion";

const recentProjects = [
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

export default recentProjects;
