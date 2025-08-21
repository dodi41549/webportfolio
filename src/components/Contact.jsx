import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true });
  const { ref: infoRef, inView: infoInView } = useInView({ triggerOnce: true });

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-20 px-6 text-center" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Let's Work Together</h2>

      <p className="mb-10 text-lg max-w-xl mx-auto text-gray-700 dark:text-gray-300">
        If you are interested in working together or have any questions, please contact me via the form below or via social media
      </p>

      {/* Form with fade-in animation */}
      <motion.form
        ref={formRef}
        initial={{ opacity: 0 }}
        animate={formInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto text-left bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md space-y-6"
      >
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-500 rounded-md bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring focus:ring-blue-400"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-500 rounded-md bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring focus:ring-blue-400"
            placeholder="Your email"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-2">Message</label>
          <textarea
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-500 rounded-md bg-white dark:bg-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring focus:ring-blue-400"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow"
        >
          Send
        </button>
      </motion.form>

      {/* Contact information with slide-up animation */}
      <motion.div
        ref={infoRef}
        initial={{ opacity: 0, y: 40 }}
        animate={infoInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 text-gray-600 dark:text-gray-300 text-sm"
      >
        Or contact via :<br />
        <strong>Email :</strong> your@email.com <br />
        <strong>WhatsApp :</strong> +1 415 123 4567
      </motion.div>
    </section>
  );
};

export default Contact;
