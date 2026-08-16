import Image from "next/image";
import Title from "../../ui/Title";
import FormBlock from "./components/FormBlock";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <Title text={"Contact"} />

      {/* Contact Form */}
      <div data-aos="fade-up" className="glass-effect grid rounded-xl h-full md:grid-cols-2">

        {/* Left Contact */}
        <div className="hidden items-center justify-center md:flex">
          <Image
            width={256}
            height={256}
            src={"/assets/contact/contact.png"}
            alt="Contact illustration"
          />
        </div>

        {/* Right Contact Form */}
        <FormBlock />
      </div>
    </section>
  );
};

export default Contact;
