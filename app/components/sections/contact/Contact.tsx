import Title from "../../ui/Title";
import FormBlock from "./components/FormBlock";
import Image from "next/image";

const Contact = () => {
  return (
    <div id="contact" className="section-padding">
      <Title text={"Contact"} />

      {/* Contact Form */}
      <div className="glass-effect grid rounded-xl h-full md:grid-cols-2">
        {/* Left Contact */}
        <div className="hidden items-center justify-center md:flex">
          <Image
            width={256}
            height={256}
            src={"/assets/contact/contact.png"}
            alt=""
          />
        </div>

        {/* Right Contact Form */}
        <FormBlock />
      </div>
    </div>
  );
};

export default Contact;
