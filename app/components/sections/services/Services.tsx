import Title from "../../ui/Title";
import servicesList from "@/app/list/servicesList";

const Services = () => {
  return (
    <div id="services" className="section-padding md:h-screen">
      <Title text={"Services"} />

      {/* Services tab */}
      <div className="grid gap-4 md:grid-cols-3 md:gap-8">

        {/* List Tab */}
        {servicesList.map(({ icon, title, text }, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="glass-effect animate rounded-xl flex flex-col items-center justify-top border-[1px] border-gray-400 p-4 dark:border-gray-600 md:hover:-translate-y-1 md:hover:shadow-md md:hover:shadow-primary"
          >
            <div className="p-4">
            {icon}
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <h2 className="text-3xl font-medium text-center sm:text-xl">{title}</h2>
              <p className="text-center text-sm leading-7">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
