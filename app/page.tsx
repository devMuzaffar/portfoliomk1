import { Skills, Hero, Navbar } from "./components";

export default function Home() {
  return (
    <div id="home" className="animate bg-gray-100 dark:bg-primary-dark">
      <Navbar />


      <Hero />
      <Skills />


    </div>
  );
}
