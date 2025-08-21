const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white dark:bg-gray-900 dark:text-white text-center py-6 transition-colors duration-300">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Created by <span className="font-semibold">Developer</span>. All rights reserved
      </p>
      <div className="mt-2 flex justify-center gap-4 text-sm">
        <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="mailto:youremail@email.com"
          className="hover:underline"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
