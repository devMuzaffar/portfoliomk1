import { Elixir, MongoDB, Reactts } from "@react-symbols/icons";

const size = 64;

const servicesList = [
  {
    icon: <Reactts width={size} />,
    title: "Frontend Development",
    text: "Offer to build responsive, dynamic, and high-performance websites using React, Next.js, and other modern web technologies",
  },
  {
    icon: <MongoDB width={size} />,
    title: "Full Stack Development",
    text: "Build scalable web applications with the various technologies, covering both the front-end and back-end, as well as database management",
  },
  {
    icon: <Elixir width={size}/>,
    title: "Design-to-Web Implementation",
    text: "Transform Figma and design files into functional websites with React or Next.js, ensuring responsiveness, performance, and accessibility. Utilize modern CSS frameworks like Tailwind CSS to craft visually appealing and consistent designs across devices",
  },
];

export default servicesList;
