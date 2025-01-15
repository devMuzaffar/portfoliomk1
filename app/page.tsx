import {
  Skills,
  Hero,
  Navbar,
  Footer,
  Qualification,
  Contact,
  Services,
  Projects,
} from "./components";

export default function Home() {
  return (
    <div className="animate bg-gray-100 dark:bg-primary-dark">
      <Navbar />

      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Qualification />
      <Contact />

      <Footer />
    </div>
  );
}
