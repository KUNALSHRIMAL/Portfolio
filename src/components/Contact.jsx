import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { SendHorizonal } from "lucide-react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xeozlgvb"); // Replace with your own Formspree form ID

  return (
    <section
      id="contact"
      className="min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] py-8 sm:py-10 md:py-12 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-10 text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        {state.succeeded ? (
          <div className="flex items-center justify-center min-h-[40vh]">

          <motion.div
            className=" p-6 border-l-4 border-blue-500 dark:border-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
            <div className="flex flex-col items-center gap-2">
              <svg
                className="w-10 h-10 text-blue-500 dark:text-blue-400"
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
              <p className="text-xl font-semibold">Message Sent Successfully!</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Thank you for reaching out — I’ll get back to you soon.
              </p>
            </div>
          </motion.div>
                  </div>
        ) : (
          // ... your form code continues
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            >
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
              >
                Name
              </label>
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              <label
                htmlFor="email"
                className="absolute left-4 top-2 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
                >
                Email
              </label>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
                >
                Message
              </label>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={state.submitting}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2 mx-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
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
