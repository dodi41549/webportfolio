import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ title, description }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-semibold mb-3 dark:text-white">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Responsive Web Design",
      description: "Build a website that looks professional and optimized on all devices",
    },
    {
      title: "Front-End Development",
      description: "Using React and Tailwind CSS or others for modern and fast websites",
    },
    {
      title: "Basic SEO Optimization",
      description: "Increase your website's visibility in search engines",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-20 px-6 text-center" id="services">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 dark:text-white">What I can do</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
