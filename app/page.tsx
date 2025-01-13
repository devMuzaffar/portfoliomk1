import {
  Skills,
  Hero,
  Navbar,
  Footer,
  Recent,
  Qualification,
  Contact,
} from "./components";

export default function Home() {
  return (
    <div className="animate bg-gray-100 dark:bg-primary-dark">
      <Navbar />
      <Hero />
      <Skills />
      <Recent />
      <Qualification />
      <Contact />

      <Footer />
    </div>
  );
}
