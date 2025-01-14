import {
  Skills,
  Hero,
  Navbar,
  Footer,
  Recent,
  Qualification,
  Contact,
  Services,
} from "./components";

export default function Home() {
  return (
    <div className="animate bg-gray-100 dark:bg-primary-dark">
      <Navbar />

      <Hero />
      <Services />
      <Skills />
      <Recent />
      <Qualification />
      <Contact />

      <Footer />
    </div>
  );
}
