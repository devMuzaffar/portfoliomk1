import { Skills, Hero, Navbar, Footer, Recent } from "./components";

export default function Home() {
  return (
    <div id="home" className="animate bg-gray-100 dark:bg-primary-dark">
      <Navbar />


      <Hero />
      <Skills />

      <Recent />


      <Footer />


    </div>
  );
}
