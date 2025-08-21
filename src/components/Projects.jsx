// src/components/Projects.jsx

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({ title, image, description }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Online Shop Website",
      image: "/src/assets/onlineshop.jpeg",
      description: "Modern e-commerce website for MSMEs with cart and payment features",
    },
    {
      title: "Product Landing Page",
      image: "/src/assets/landingpage.jpeg",
      description: "Responsive landing page for digital and physical product promotion",
    },
    {
      title: "Online Booking System",
      image: "/src/assets/booking.jpeg",
      description: "Simple booking application for consultation or reservation services",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-6 text-center" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 dark:text-white">Portfolio Project</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
