import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { SendHorizonal } from "lucide-react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xeozlgvb");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="min-h-[70vh] py-20 px-6
      bg-gradient-to-b from-white to-gray-100
      dark:from-gray-900 dark:to-gray-950
      text-gray-900 dark:text-white"
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12
          text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        {/* Success State */}
        {state.succeeded ? (
          <motion.div
            className="flex flex-col items-center justify-center
            bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <svg
              className="w-12 h-12 mb-4 text-blue-500 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Thank you for reaching out. I’ll get back to you soon.
            </p>
          </motion.div>
        ) : (
          /* Contact Form */
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8 bg-gray-100 dark:bg-gray-800
            p-10 rounded-2xl shadow-xl"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Name */}
            <motion.div variants={item} className="relative">
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-2 rounded-lg
                border border-gray-300 dark:border-gray-600
                bg-white dark:bg-gray-900
                placeholder-transparent
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-sm text-gray-500
                transition-all
                peer-placeholder-shown:top-3.5
                peer-placeholder-shown:text-base
                peer-focus:top-2
                peer-focus:text-sm
                peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
              >
                Name
              </label>
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </motion.div>

            {/* Email */}
            <motion.div variants={item} className="relative">
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-2 rounded-lg
                border border-gray-300 dark:border-gray-600
                bg-white dark:bg-gray-900
                placeholder-transparent
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2 text-sm text-gray-500
                transition-all
                peer-placeholder-shown:top-3.5
                peer-placeholder-shown:text-base
                peer-focus:top-2
                peer-focus:text-sm
                peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
              >
                Email
              </label>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </motion.div>

            {/* Message */}
            <motion.div variants={item} className="relative">
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 rounded-lg
                border border-gray-300 dark:border-gray-600
                bg-white dark:bg-gray-900
                placeholder-transparent
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-sm text-gray-500
                transition-all
                peer-placeholder-shown:top-4
                peer-placeholder-shown:text-base
                peer-focus:top-2
                peer-focus:text-sm
                peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
              >
                Message
              </label>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </motion.div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={state.submitting}
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 mx-auto
              bg-blue-600 hover:bg-blue-700
              text-white font-semibold
              px-8 py-3 rounded-xl transition"
            >
              {state.submitting ? "Sending..." : "Send Message"}
              <SendHorizonal size={18} />
            </motion.button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
