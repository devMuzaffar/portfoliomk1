import {
  Firebase,
  MongoDB,
  Next,
  Node,
  Reactjs,
  Sass,
  Tailwind,
  Vite,
} from "@react-symbols/icons";
import { SiExpress, SiMui } from "react-icons/si";
import FramerMotion from "../components/ui/FramerMotion";
import HTML from "../components/ui/HTML";
import Javascript from "../components/ui/Javascript";
import CSS from "../components/ui/CSS";
import Bootstrap from "../components/ui/Bootstrap";

const reactTechIcons = [
  <Reactjs key={"react"} />,
  <Javascript key={"javascript"} />,
  <CSS key={"css"} />,
  <HTML key={"html"} />,
];
const viteTechIcons = [...reactTechIcons, <Vite key={"vite"} />];
const basicTechIcons = [...viteTechIcons.slice(2, 4)];
const javascriptTechIcons = [...reactTechIcons.slice(1, 4)];
const reactMuiIcons = [
  <SiMui key={"mui"} className="text-blue-500" />,
  ...reactTechIcons.slice(0, 1),
];

//
// Recent Projects
//
export const recentProjects = [
  //
  {
    img: "/assets/projects/pts.png",
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

  //
  {
    img: "/assets/projects/coinbounce.png",
    title: "Coin Bounce",
    githubLink: "https://github.com/devMuzaffar/coin-bounce/",
    siteLink: "https://coin-bounce-ui.onrender.com/",
    icons: [
      <Reactjs key={"react"} />,
      <Node key={"node"} />,
      <SiExpress key={"express"} />,
      <MongoDB key={"mongo"} />,
      <Tailwind key={"tailwind"} />,
    ],
  },

  //
  {
    img: "/assets/projects/merncrud.png",
    title: "MongoMax",
    githubLink: "https://github.com/devMuzaffar/merncrudapp",
    siteLink: "https://merncrudapp-ui.onrender.com/",
    icons: [
      <Reactjs key={"react"} />,
      <Node key={"node"} />,
      <SiExpress key={"express"} />,
      <MongoDB key={"mongo"} />,
      <Tailwind key={"tailwind"} />,
      <Bootstrap key={"bootstrap"} />,
    ],
  },

  //
  {
    img: "/assets/projects/chaajao.png",
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

  //
  {
    img: "/assets/projects/chat.jpeg",
    title: "Chat App",
    githubLink: "https://github.com/devMuzaffar/React_chat",
    siteLink: "https://reactchatmk.netlify.app/",
    icons: [
      <Reactjs key={"react"} />,
      <Firebase key={"firebase"} />,
      <Sass key={"sass"} />,
    ],
  },

  //
  {
    img: "/assets/projects/gpt3.jpeg",
    title: "GPT-3 Web",
    githubLink: "https://github.com/devMuzaffar/GPT3Web",
    siteLink: "https://gpt3mk.netlify.app/",
    icons: reactTechIcons,
  },
];

//
// Full Stack Projects
//
export const fullStackProjects = [
  //
  recentProjects[1],
  recentProjects[2],
  recentProjects[4],

  //
  {
    img: "/assets/projects/blog.png",
    title: "Blog App",
    githubLink: "https://github.com/devMuzaffar/React_Blog/",
    siteLink: "https://myblogmk1.netlify.app/",
    icons: [<Reactjs key={"react"} />, <Firebase key={"firebase"} />],
  },
];

//
// Frontend Projects
//

export const frontendProjects = [
  // Start
  recentProjects[4],
  recentProjects[5],
  {
    img: "/assets/projects/dining.webp",
    title: "Foody Restaurant",
    githubLink: "https://github.com/devMuzaffar/RestaurantApp",
    siteLink: "https://ffrestaurant.netlify.app/",
    icons: reactTechIcons,
  },

  {
    img: "/assets/projects/adminpanelmui.webp",
    title: "Material Admin Panel",
    githubLink: "https://github.com/devMuzaffar/ReactAdminPanel",
    siteLink: "https://reactadminpanelmk.netlify.app/",
    icons: reactMuiIcons,
  },

  {
    img: "/assets/projects/quiz.png",
    title: "Trivia Quiz App",
    githubLink: "https://github.com/devMuzaffar/Crorepati-quiz",
    siteLink: "https://crorepatimk.netlify.app/",
    icons: reactTechIcons,
  },

  {
    img: "/assets/projects/socialmedia.png",
    title: "MK Social",
    githubLink: "https://github.com/Evilking009/SocialMediaApp",
    siteLink: "https://socialmediamk.netlify.app/",
    icons: reactTechIcons,
  },

  {
    img: "/assets/projects/covid.png",
    title: "Covid-19 Tracker",
    githubLink: "https://github.com/devMuzaffar/Covid-Tracker",
    siteLink: "https://covidtracker19mk.netlify.app/",
    icons: reactTechIcons,
  },

  {
    img: "/assets/projects/movies.png",
    title: "Movies App",
    githubLink: "https://github.com/Evilking009/MovieListApp",
    siteLink: "https://movielistappmk.netlify.app/",
    icons: reactTechIcons,
  },

  {
    img: "/assets/projects/foodrecipe.png",
    title: "Food Recipe App",
    githubLink: "https://github.com/Evilking009/FoodRecipe",
    siteLink: "https://foodrecipejs.netlify.app/",
    icons: reactTechIcons,
  },

  {
    img: "/assets/projects/tictactoe.png",
    title: "Tic Tac Toe App",
    githubLink: "https://github.com/devMuzaffar/PRODIGY_WD_03",
    siteLink: "https://prodigywd03.netlify.app/",
    icons: viteTechIcons,
  },

  {
    img: "/assets/projects/stopwatch.png",
    title: "Stopwatch App",
    githubLink: "https://github.com/devMuzaffar/PRODIGY_WD_02",
    siteLink: "https://prodigywd02.netlify.app/",
    icons: viteTechIcons,
  },

  {
    img: "/assets/projects/first.webp",
    title: "Basic Landing Page",
    githubLink: "https://github.com/devMuzaffar/PRODIGY_WD_01",
    siteLink: "https://prodigywd01.netlify.app/",
    icons: viteTechIcons,
  },

  {
    img: "/assets/projects/barbershop.webp",
    title: "Barber Shop",
    githubLink: "",
    siteLink: "https://beardedmanx.netlify.app/",
    icons: viteTechIcons,
  },

  {
    img: "/assets/projects/adminpanel.webp",
    title: "Admin Panel",
    githubLink: "https://github.com/devMuzaffar/AdminPanel",
    siteLink: "https://adminpanelmk.netlify.app/",
    icons: reactTechIcons,
  },

  {
    img: "/assets/projects/socialmediabasic.png",
    title: "Facebook UI Clone",
    githubLink: "https://github.com/devMuzaffar/Social-media",
    siteLink: "https://mksocialme.netlify.app/",
    icons: reactTechIcons,
  },

  {
    img: "/assets/projects/ecommerce.png",
    title: "E-Commerce UI",
    githubLink: "https://github.com/Evilking009/cara-web",
    siteLink: "https://carawebstore.netlify.app/",
    icons: javascriptTechIcons,
  },

  {
    img: "/assets/projects/todolist.png",
    title: "Todo List App",
    githubLink: "https://github.com/Evilking009/TodoList",
    siteLink: "https://todolistmk1.netlify.app/",
    icons: [<Bootstrap key={"bootstrap"} />, ...javascriptTechIcons],
  },

  {
    img: "/assets/projects/landingpagetailwind.jpeg",
    title: "Manage Landing Page",
    githubLink: "https://github.com/devMuzaffar/ManageLandingPage",
    siteLink: "https://managelandingpagemk.netlify.app/",
    icons: [<Tailwind key={"tailwind"} />, ...javascriptTechIcons],
  },

  {
    img: "/assets/projects/foodies.png",
    title: "Foodies Delivery",
    githubLink: "https://github.com/Evilking009/FoodDelivery",
    siteLink: "https://foodiesmk.netlify.app/",
    icons: javascriptTechIcons,
  },

  {
    img: "/assets/projects/university.png",
    title: "University website",
    githubLink: "https://github.com/Evilking009/Education-website",
    siteLink: "https://educationwebsitemk.netlify.app/",
    icons: javascriptTechIcons,
  },

  {
    img: "/assets/projects/basicfooddelivery.png",
    title: "Pak Online Foods",
    githubLink: "https://github.com/Evilking009/Food-Delivery",
    siteLink: "https://fooddeliverypk.netlify.app/",
    icons: basicTechIcons,
  },

  {
    img: "/assets/projects/grid.png",
    title: "Business Grid",
    githubLink: "https://github.com/Evilking009/Business-Grid",
    siteLink: "https://businessgrid.netlify.app/",
    icons: basicTechIcons,
  },

  {
    img: "/assets/projects/redstore.png",
    title: "Redstore Store",
    githubLink: "https://github.com/devMuzaffar/Ecommerce-website",
    siteLink: "https://redstore-mk.netlify.app/",
    icons: javascriptTechIcons,
  },

  {
    img: "/assets/projects/fitness.png",
    title: "Fitness Page",
    githubLink: "https://github.com/devMuzaffar/Gym-website",
    siteLink: "https://mkfitness-demo.netlify.app/",
    icons: basicTechIcons,
  },

  {
    img: "/assets/projects/foodpanda.png",
    title: "Foodpanda Clone",
    githubLink: "",
    siteLink: "https://foodpanda-clonemk.netlify.app/",
    icons: basicTechIcons,
  },
];
