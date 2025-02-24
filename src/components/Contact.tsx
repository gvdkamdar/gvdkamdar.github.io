
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer className="py-12 bg-[#1a1a1a]" id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-[#50E3C2]/10 text-[#50E3C2] rounded-full"
          >
            Get in Touch
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Let's Build Something Together
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <motion.a
              href="mailto:gkamdar@cs.stonybrook.edu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 bg-[#50E3C2]/10 text-[#50E3C2] rounded-full hover:bg-[#50E3C2]/20 transition-colors"
            >
              <Mail size={20} />
              <span>gkamdar@cs.stonybrook.edu</span>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/gvdkamdar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 bg-[#50E3C2]/10 text-[#50E3C2] rounded-full hover:bg-[#50E3C2]/20 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/gvdkamdar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 bg-[#50E3C2]/10 text-[#50E3C2] rounded-full hover:bg-[#50E3C2]/20 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </motion.a>
          </div>

          <p className="text-white/60">
            © {new Date().getFullYear()} Gaurav Kamdar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;
