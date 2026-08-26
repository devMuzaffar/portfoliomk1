import aboutData from "@/app/list/aboutList";
import { LuUser } from "react-icons/lu";
import Title from "../../ui/Title";

const About = () => {
  return (
    <section id="about" className="section-padding">
      {/* Title */}
      <Title text={aboutData.heading} />

      {/* Grid Parent Block */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch">
        {/* Left Column: Bio Text */}
        <div
          data-aos="fade-right"
          className="md:col-span-3 animate glass-effect rounded-2xl px-6 py-5 sm:px-8 sm:py-6 border-[1px] border-gray-400 dark:border-gray-600 hover:shadow-lg hover:border-primary hover:dark:border-primary hover:shadow-primary/30 hover:dark:shadow-primary/30 hover:-translate-y-1 flex flex-col gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
            <LuUser className="text-primary" size={20} />
          </div>

          <div className="flex flex-col gap-2.5">
            {aboutData.bio.map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 dark:text-gray-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Right Column: 3 Info Blocks */}
        <div
          data-aos="fade-left"
          className="md:col-span-2 flex flex-col justify-between gap-4"
        >
          {aboutData.cards.map((card, index) => (
            <div
              key={index}
              className="animate glass-effect rounded-xl p-4 sm:p-5 border-[1px] border-gray-400 dark:border-gray-600 hover:shadow-lg hover:border-primary hover:dark:border-primary hover:shadow-primary/30 hover:dark:shadow-primary/30 hover:-translate-y-1 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                {card.badge && (
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
                    {card.badge}
                  </span>
                )}
              </div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                {card.title}
              </h4>
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
