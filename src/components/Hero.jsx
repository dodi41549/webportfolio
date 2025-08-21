// src/components/Hero.jsx
const Hero = () => {
  return (
    <section className="bg-gray-800 text-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-950 dark:text-white h-screen flex flex-col justify-center items-center text-center px-4" id="hero">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome!</h1>
      <p className="text-lg md:text-2xl mb-6 max-w-xl">
        I'm a Front-End Developer who creates modern, fast, and responsive websites - ready to help your business make the most of its online presence
      </p>
      <a href="#projects">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow dark:text-black dark:hover:bg-gray-200">
          My projects
        </button>
      </a>
    </section>
  );
};

export default Hero;
