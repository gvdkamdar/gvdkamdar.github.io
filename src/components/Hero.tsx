
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent py-32" id="hero">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-24"
          >
            <h2 className="text-2xl md:text-3xl text-white/60 mb-4">
              PRODUCT | TECH | DESIGN  
            </h2>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h1 className="text-6xl md:text-[120px] font-bold text-white leading-none tracking-tighter mb-8">
                  GAURAV
                </h1>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h1 className="text-6xl md:text-[120px] font-bold text-white leading-none tracking-tighter mb-12">
                  KAMDAR
                </h1>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div className="space-y-6">
              <p className="text-xl text-white/60 leading-relaxed">
                Graduate Research Assistant at Visual Analytics and Imaging Lab, specializing in AI, ML, and Data Science. Building innovative solutions at the intersection of technology and real-world impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="mailto:gkamdar@cs.stonybrook.edu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-[#50E3C2] text-black rounded-full font-medium hover:bg-[#50E3C2]/90 transition-all duration-300"
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  href="https://github.com/gvdkamdar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-[#50E3C2]/20 text-[#50E3C2] rounded-full font-medium hover:bg-[#50E3C2]/10 transition-all duration-300"
                >
                  GitHub
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/gvdkamdar"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-[#50E3C2]/20 text-[#50E3C2] rounded-full font-medium hover:bg-[#50E3C2]/10 transition-all duration-300"
                >
                  LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
