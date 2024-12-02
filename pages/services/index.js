import { FaReact, FaBootstrap, FaNodeJs, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const servicesData = [
  {
    title: "Front-End Development",
    description:
      "Crafting modern and responsive web interfaces using React.js, Bootstrap, and Tailwind CSS. I focus on delivering seamless user experiences with visually appealing designs.",
    icons: [<FaReact />, <FaBootstrap />, <SiTailwindcss />],
  },
  {
    title: "Back-End Development",
    description:
      "Building robust and secure server-side applications with Node.js and Express.js, integrated with MongoDB for efficient data management and high performance.",
    icons: [<FaNodeJs />, <SiExpress />, <SiMongodb />],
  },
  {
    title: "WordPress Development",
    description:
      "Developing custom WordPress websites, including theme design and plugin customization, to create websites tailored to clients' unique needs.",
    icons: [<FaWordpress />],
  },
];

const Services = () => {
  return (
    <div className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-accent">My Services</h2>
          <p className="mt-4 text-gray-400">
            I provide a range of specialized services in web application and website development using the latest technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, serviceIndex) => (
            <div
              key={serviceIndex} {/* Add key for the service item */}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              {/* Icons */}
              <div className="flex gap-4 text-4xl text-accent mb-4">
                {service.icons.map((icon, iconIndex) => (
                  <div key={iconIndex}>{icon}</div> {/* Add key for each icon */ }
                ))}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
